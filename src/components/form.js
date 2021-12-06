// import React from "react";
//
// function Form(){
//
//   const [one,setOne]=React.useState({
//     country:"",
//     college:""
//   })
//
//   function handleChange(event){
//     const {name,value}= event.target;
//     setOne(prev=>{
//       return {...prev, [name]:value}
//     })
//
//   }
//
//   function handleSubmit(event){
//     event.preventDefault();
//     console.log("hey");
//   }
//
//
//   return(
//     <div className="col d-flex justify-content-center form  " >
//     <div className="wrap"  >
//  <div class="search">
//
//     <input onChange={handleChange} type="text" class="searchTerm" placeholder="Enter College Name" />
//     <button onClick={handleSubmit} type="submit" class="searchButton">
//        Go
//    </button>
//
//  </div>
//
// </div>
//
//    </div>
//   )
// }
//
// export default Form;
import React, { useState } from "react";
import { universities as data } from "../data/db.json";
import { countryCode as codes } from "../data/code.json";
import Card from "./card";

function Form() {
    const [unis, setUnis] = useState([]);
    const [query, setQuery] = useState("");
    const [state, setState] = useState(false);
    const [undefine, setUndefine] = useState(false);
    const len = unis.length;
    const msg1 = "Displaying " + len + " Results.";
    const undefinedMSg = "Enter valid Country Name.";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuery({ name: name, value: value });
    };

    const handleSubmit = () => {
        //        if (query.name === "country") {
        //            var tempCodes = codes.filter((code) => {
        //                return query.value
        //                    .toLowerCase()
        //                    .includes(code.Name.toLowerCase());
        //            });
        //            console.log(tempCodes);
        //        }

        const filteredUnis = data.filter((uni) => {
            if (query.name === "college") {
                return uni.name
                    .toLowerCase()
                    .includes(query.value.toLowerCase());
            } else if (query.name === "country") {
                const tempCodes = codes.filter((code) => {
                    return query.value
                        .toLowerCase()
                        .includes(code.Name.toLowerCase());
                });
                //                return uni.country === tempCodes[0].Code;
                if (tempCodes[0] === undefined) {
                    setUndefine(true);
                    return null;
                } else if (uni.country === tempCodes[0].Code) {
                    return uni;
                }
            }
            return "";
        });
        setUnis(filteredUnis);
        setState(true);
    };

    const showUnis = unis.map((uni, index) => {
        return (
            <Card
                key={index}
                className="unicard"
                name={uni.name}
                country={uni.country}
                url={uni.url}
                scraperUrl={uni.scraper}
            />
        );
    });

    return (
        <div className="col d-flex justify-content-center form">
            {!state && (
                <div className="wrap">
                    <div className="search">
                        <input
                            name="college"
                            onChange={handleChange}
                            type="text"
                            className="searchTerm"
                            autoComplete="off"
                            placeholder="Search by College"
                        />
                        <button
                            type="submit"
                            className="searchButton"
                            onClick={handleSubmit}
                        >
                            Go
                        </button>
                    </div>
                    <div className="middle">
                        <h5>OR</h5>
                    </div>

                    <div className="search">
                        <input
                            onChange={handleChange}
                            name="country"
                            type="text"
                            className="searchTerm"
                            autoComplete="off"
                            placeholder="Search by Country"
                        />
                        <button
                            type="submit"
                            className="searchButton"
                            onClick={handleSubmit}
                        >
                            Go
                        </button>
                    </div>
                </div>
            )}

            {state && (
                <div className="no-display">
                    <h3>{undefine ? undefinedMSg : msg1}</h3>
                </div>
            )}

            <div className="unilist">{showUnis}</div>
        </div>
    );
}

export default Form;
