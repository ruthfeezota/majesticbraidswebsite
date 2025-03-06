import React from "react";
import logo1 from "./assets/logo1.png";
import "../App.css";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="page-scroll" href="#page-top">
            <img src={logo1} alt="Majestic Braids Logo" className="logo" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://app.squareup.com/appointments/book/ssrk16cq70u9xm/L90W7ZYT50MKG/start"
                className=" "
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
