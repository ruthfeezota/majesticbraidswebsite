import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from "react-ga4";


// Initialize Google Analytics
ReactGA.initialize("G-MEHWDERJ4V");

ReactGA.send({ 
  hitType: "pageview", 
  page: "/my-path", 
  title: "Custom Title" 
});




ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


