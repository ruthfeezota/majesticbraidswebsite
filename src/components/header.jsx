import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        {/* Video Background */}
        <video autoPlay muted loop className="background-video" alt="Video of Majestic Braids's Hair Braider Braiding Client's Hair">
          <source src="../img/LizStyle.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay and Content */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <p className="headerlocation">
                Currently servicing: Providence, Cranston, East Providence, Pawtucket, Warwick, and Woonsocket.
                </p>
                <a href="https://app.squareup.com/appointments/book/ssrk16cq70u9xm/L90W7ZYT50MKG/start" className="btn btn-custom btn-lg page-scroll" target="_blank" rel="noopener noreferrer">
                  Book Mobile Service Now
                </a>
              </div>
             
            </div>
            <a href="https://app.squareup.com/appointments/book/ssrk16cq70u9xm/L90W7ZYT50MKG/start" className="bottom-button btn btn-custom " target="_blank" rel="noopener noreferrer">Book Now</a>
          </div>
        </div>
      </div>
    </header>
  );
};
