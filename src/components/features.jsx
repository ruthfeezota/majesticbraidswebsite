import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Most Popular <span className="featuretext ">Services</span></h2>
    
        </div>
        <div className="row ">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <img src={d.img} alt={d.title} className="featureimg"/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <a href={d.link} alt={d.title} className="btn btn-custom" target="_blank" rel="noopener noreferrer">Book Now</a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
