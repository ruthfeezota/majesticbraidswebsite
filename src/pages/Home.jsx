import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";
import '../index.css'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


function Home() {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#F4F3E1]">
    <title>Home Page | Majestic Braids RI: Expert Hair Braiding | Providence RI, Cranston RI, East Providence RI, Pawtucket RI, Warwick RI, and Woonsocket RI, Boston MA </title>
            <meta
                name="description"
                content="Providence's top braiding salon! Expert hair braiding, box braids, Senegalese twists, & more. Servicing Providence, Cranston, & surrounding RI areas. Book now! Majestic Braids - Mobile Hair Braiding"
            />
            <meta
                name="keywords"
                content= "hair braiding near me Providence RI,  knotless box braids near me Providence RI,  african braiding salons near me Providence RI,  box braids Providence RI,  lemonade braids Providence RI,  braids Providence RI,  feed in braids Providence RI,  african hair braiding Providence RI,  black hair salons near me Providence RI,  natural hair salon Providence RI,  african hair braiding near me Providence RI,  braiding salons near me Providence RI,  braiding shops near me Providence RI,  hair braiding shops near me Providence RI,  braiding salon Providence RI,  cheap hair braiding salons near me Providence RI,  senegalese twist hair Providence RI, hair braiding near me Cranston RI,  knotless box braids near me Cranston RI,  african braiding salons near me Cranston RI,  box braids Cranston RI,  lemonade braids Cranston RI,  braids Cranston RI,  feed in braids Cranston RI,  african hair braiding Cranston RI,  black hair salons near me Cranston RI,  natural hair salon Cranston RI,  african hair braiding near me Cranston RI,  braiding salons near me Cranston RI,  braiding shops near me Cranston RI,  hair braiding shops near me Cranston RI,  braiding salon Cranston RI,  cheap hair braiding salons near me Cranston RI,  senegalese twist hair Cranston RI, hair braiding near me Pawtucket RI,  knotless box braids near me Pawtucket RI,  african braiding salons near me Pawtucket RI,  box braids Pawtucket RI,  lemonade braids Pawtucket RI,  braids Pawtucket RI,  feed in braids Pawtucket RI,  african hair braiding Pawtucket RI,  black hair salons near me Pawtucket RI,  natural hair salon Pawtucket RI,  african hair braiding near me Pawtucket RI,  braiding salons near me Pawtucket RI,  braiding shops near me Pawtucket RI,  hair braiding shops near me Pawtucket RI,  braiding salon Pawtucket RI,  cheap hair braiding salons near me Pawtucket RI,  senegalese twist hair Pawtucket RI, hair braiding near me Boston MA, knotless box braids near me Boston MA, african braiding salons near me Boston MA, box braids Boston MA, hair braiding near me East Providence RI, knotless box braids near me East Providence RI, hair braiding near me Warwick RI,  knotless box braids near me Warwick RI,  african braiding salons near me Warwick RI,  box braids Warwick RI,  lemonade braids Warwick RI,  braids Warwick RI,  feed in braids Warwick RI,  african hair braiding Warwick RI,  black hair salons near me Warwick RI,  natural hair salon Warwick RI"
            />

    <div>
         <Navigation />
         <Header data={landingPageData.Header} />
         <Features data={landingPageData.Features} />
         <Gallery data={landingPageData.Gallery} />
         <About data={landingPageData.About} />
         <Services data={landingPageData.Services} />
         <Testimonials data={landingPageData.Testimonials} />
         <Contact data={landingPageData.Contact} />
       </div>
       </main>
  )
}

export default Home