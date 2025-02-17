import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What My Clients <span className="featuretext">Say </span></h2>
        </div>
        <div className="testimonial-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="testimonial">
                  <div className="testimonial-image">
                    <img src={d.img} alt={d.name} />
                  </div>
                  <div className="testimonial-content">
                    <p>"{d.text}"</p>
                    <div className="testimonial-meta">- {d.name}</div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
