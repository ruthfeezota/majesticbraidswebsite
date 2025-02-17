import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services <span className="featuretext">Menu</span></h2>
          <p>
            View our full list of services offered and book
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 ">
                  {" "}
                  <img src={d.img} alt={d.title} className="serviceimg"/>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <a href="{d.link}" className="servicesbooktext">Book Now</a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
