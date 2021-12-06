import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MapGL from "react-map-gl";
import { Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import axios from "axios";

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWRpdHlhdGhha2FyIiwiYSI6ImNrd2tob2F3azFxYncyb252cTZlMjI5bnEifQ.ATVrm9P45vun6A9l5qt_cQ";

const MapUniversity = () => {
    // const [coordinates, setCoordinates]= useState([])
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const location = useLocation();
    const address = location.state.college;
    console.log(address);
    // const long=-1.3980085 ;
    // const lat= 50.934787375 ;

    console.log(long, lat);

    useEffect(() => {
        axios
            .get(
                "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
                    address +
                    ".json?access_token=pk.eyJ1IjoiYWRpdHlhdGhha2FyIiwiYSI6ImNrd2thZzBzbDFxaHQycW5zdTFjNWpra3YifQ.ceU-3_9E_vJ2xv4gQTSm8A"
            )
            .then((res) => {
                // console.log(res.data.features[0].geometry.coordinates);
                // setCoordinates(res.data.features[0].geometry.coordinates);
                setLat(res.data.features[0].geometry.coordinates[1]);
                setLong(res.data.features[0].geometry.coordinates[0]);
            });
    });

    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: long,
        zoom: 1,
    });
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 2000 };

            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides,
            });
        },
        [handleViewportChange]
    );

    return (
        <div className="map-container">
            <MapGL
                mapStyle={
                    "mapbox://styles/adityathakar/ckwkw9jjza7i114mp87e0pbju"
                }
                ref={mapRef}
                {...viewport}
                width="100%"
                height="100%"
                marker={true}
                onViewportChange={handleViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Geocoder
                    mapRef={mapRef}
                    placeholder={"search nearby places"}
                    marker={true}
                    proximity={{ longitude: long, latitude: lat }}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    position="bottom-left"
                    zoom={17}
                />

                <Marker
                    latitude={lat}
                    longitude={long}
                    offsetTop={-48}
                    offsetLeft={-24}
                >
                    <img
                        src="https://img.icons8.com/color/48/000000/marker.png"
                        alt=""
                    />
                </Marker>
            </MapGL>
        </div>
    );
};

export default MapUniversity;
