import React from "react";
import {Link} from "react-router-dom";

function Card(props) {
  console.log(props.scraperUrl);
   return (
       <div className="card border-dark  bg-transparent bg-secondary note">
           <div className="card-body">
               <h5 className="card-title">{props.name}</h5>
               <h6 className="card-subtitle mb-2  ">{props.country}</h6>
               <Link className="button-class card-button"   to={{
    pathname: "/uni-page",
    state: {url:props.url, college: props.name, country: props.country, scraperUrl: props.scraperUrl}
  }}>
                   <button type="button" className="btn btn-sm btn-outline-light">
                        View
                   </button>
               </Link>
           </div>
       </div>
   );
}

export default Card;
