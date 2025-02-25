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
    <title>Home Page | Box Braids & Cornrows | Providence Mobile Braider | Majestic Braids</title>
            <meta
                name="description"
                content="Majestic Braids is a mobile hair braiding salon that offers expert hair braiding services in Providence, RI. Specializing in box braids, cornrows, and more. This is the home page"
            />
            <meta
                name="keywords"
                content= "Hair braiding Providence RI, Box braids Providence, Cornrows Providence RI, Senegalese twists Providence, Kids braids Providence, Protective hairstyles Providence, Natural hair braiding Providence, African hair braiding Providence, Best braider Providence RI, Hair braiding services Providence, Affordable braids Providence, best box braids for thick hair Providence RI, how much do knotless braids cost in Providence RI, natural hair braiding styles for black women Providence, cornrows with designs near me Providence, senegalese twist styles with extensions Providence RI, protective hairstyles for natural hair growth Providence, kids, braided hairstyles for school Providence RI, crochet braids with human hair Providence, faux locs installation near me Providence RI, micro braids with beads Providence RI, best braider for alopecia hair Providence, hair braiding for weddings Providence, braiding hair extensions for sale Providence, hair braiding for, sensitive scalp Providence, braiding for hair loss Providence RI, how to maintain braided hairstyles Providence, best hair braider for damaged hair Providence, affordable hair braiding services for students Providence, hair braiding consultation near me Providence, mobile hair braider for elderly Providence, hair braiding for children with special needs Providence, hair braiding near Brown University Providence, braider in Fox Point Providence RI, best African hair braiding salon in South Providence, hair braiding classes Providence RI, mobile hair braiding services in East Side Providence, hair braider open on Sundays Providence, late night hair braiding appointments Providence, same day hair braiding appointment Providence RI, cheap hair braiding services Providence RI, affordable box braids near me Providence, hair braiding deals Providence RI, box braids with curly ends Providence RI, long lasting cornrows with extensions Providence, natural hair braiding styles for short hair Providence, protective styles for transitioning hair Providence RI, hair braiding near Brown University Providence RI, best box braids in Federal Hill Providence, affordable cornrows in South Providence, natural hair braiding salons in Downtown Providence, mobile hair braider Providence RI for weddings, kids, braids near me in Providence RI, Senegalese twists Providence RI price, hair braiding classes Providence RI, hair braiding near Cranston RI, box braids Cranston RI prices"
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