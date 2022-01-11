import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function UniPage() {
  const [imgUrl, setUrl] = useState("");
  const location = useLocation();
  const [data, setData] = useState({});

  // console.log(location.state);
  const { college, url, country } = location.state;

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          college +
          "&client_id=IVpa8topojL7EFSbV96j06RRI0UgqPDuHZiBwAsXxAQ"
      )
      .then((res) => {
        console.log(res.data.results[5].urls.raw);
        setUrl(res.data.results[0].urls.raw);
      });

    axios
      .post("https://ninetails-backend.herokuapp.com/", location.state)
      .then((res) => {
        setData(res.data);
      });
  });

  console.log(data);

  return (
    <div>
      <div className="form" style={{ backgroundImage: "url(" + imgUrl + ")" }}>
        <div className="form-content">
          <p className="title-uni">{college}</p>
          <p className="subtitle-uni">{country}</p>
        </div>
      </div>

      <div className="uni-page-contents">
        <h2 className="uni-page-elements uni-page-titles">About </h2>
        <p className="uni-page-elements uni-page-data">{data.about}</p>
        <div className="container">
          <div className="row">
            <div className="col unicost">
              <h2 className="uni-page-elements uni-page-titles">Cost </h2>
              <h3 className="uni-page-elements  uni-page-data"> {data.cost}</h3>
            </div>
            <div className="col uniavgliving">
              <h2 className="uni-page-elements uni-page-titles">
                Average Living Expenses
              </h2>
              <h3 className="uni-page-elements  uni-page-data">
                {data.avg_living}
              </h3>
            </div>
          </div>

          <h2 className="uni-page-elements uni-page-titles">Rankings</h2>
          <div className="row uniranks">
            <div className="col col-img">
              <h3 className="uni-page-elements  uni-page-data">
                {data.qsRank}
              </h3>
              <img
                className="uni-page-elements uni-page-img"
                src={data.qsLogo}
                alt=""
              />
            </div>
            <div className="col col-img">
              <h3 className="uni-page-elements  uni-page-data">{data.wur}</h3>
              <img
                className="uni-page-elements uni-page-img"
                src={data.wurLogo}
                alt=""
              />
            </div>
          </div>
        </div>
        <a href={url} className="uni-page-elements btn btn-danger btn-lg">
          <i class="fas fa-home"></i>
        </a>
        <Link
          className="button-class"
          to={{
            pathname: "/uni-location",
            state: { college: college, country: country },
          }}
        >
          <button type="button" className="btn btn-outline-danger btn-lg">
            <i className="fas fa-map-marked-alt"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UniPage;
