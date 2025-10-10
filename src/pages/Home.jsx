import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import Navbar from "../components/Navbar";
import SaleBanner from "../components/SaleBanner";
import EmailPopup from "../components/EmailPopUp"
import Remu from "../components/Remu";


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
                content= "hair braiding near me Providence RI, boho braids near me Providence RI, african braiding salons near me Providence RI, box braids Providence RI, braids Providence RI,  feed in braids Providence RI,  african hair braiding Providence RI, black hair salons near me Providence RI, natural hair salon Providence RI,  african hair braiding near me Providence RI,braiding salons near me Providence RI, braiding shops near me Providence RI,  hair braiding shops near me Providence RI, braiding salon Providence RI, cheap hair braiding salons near me Providence RI,  senegalese twist hair Providence RI, hair braiding near me Cranston RI,  knotless box braids near me Cranston RI,  african braiding salons near me Cranston RI, box braids Cranston RI, braids Cranston RI,  feed in braids Cranston RI, african hair braiding Cranston RI,  black hair salons near me Cranston RI, natural hair salon Cranston RI, african hair braiding near me Cranston RI, braiding salons near me Cranston RI, braiding shops near me Cranston RI, hair braiding shops near me Cranston RI, braiding salon Cranston RI,  cheap hair braiding salons near me Cranston RI, senegalese twist hair Cranston RI, Boho braids near me, hair braiding providence ri, hair braiding rhode island, box braids rhode island, hair braiding near me, african hair braiding near me, braiding salon near me, braiding salons near me, hair braiding salon near me, braiding shops near me, cheap hair braiding salons near me, braiding shop near me, african hair braiding salon near me, braiding salons, braiding shops, african braiding salon near me, african hair braiding salons near me, african braiding salons near me, braids shops near me, hair braiding services, best braiding salons in providence ri, braids near me, box braids near me, african braiding near me, braiding hair near me, hair braiding shops near me, african braiding shops near me, braiding hair colors, xpression braiding hair colors, hair salons that do box braids near me, african hair braiding salon, aisha hair braiding, african hair braiding shops near me, box braids price list, african hair braiding price list, african braiding salons prices near me, african hair braiding shops, lemonade braids small, african hair braiding shop, kids hair braiding near me, black kids hair braiding near me, kids braids near me, african hair braiding near me, black kids hairstyles gallery, back to school hair specials, kids hair braiding Providence RI, mobile hair braiding Rhode Island, Rumi K-Pop braids for kids, Demon Hunters braids kids RI, children’s braiding service Providence, kids braid stylist near me, birthday party braids Rhode Island, party braiding service Providence, mobile braid party RI, in-home hair braiding for kids, Providence kids party braids, Cranston kids braiding service, Warwick kids braids near me, kids festival braids Rhode Island, temporary color braids for kids, tinsel braids Rhode Island, clip-in braid extensions for kids, box braids kids Rhode Island, feed-in braids for kids, knotless braids for kids Providence, halo braids children, twist braids kids Rhode Island, mobile hair braiding for parties, pop-up braid service Rhode Island, African hair braiding kids RI, kids hair stylist Rhode Island, professional braid artists Rhode Island, at-home braid appointments, Rumi K-Pop braid party, Demon Hunter braids party service, K-Pop braids for children Providence, themed braids for birthday party, Providence kids braiding events, temporary colored braids for kids, tinsel extensions for children, mobile festival braid service, pop-up braid event Rhode Island, kids hair braiding near me, party braid stylist Rhode Island, mobile braid artist Cranston, Rumi Demon Hunter hair braiding, creative braids for kids Rhode Island, Providence birthday hair stylist, party-ready braids kids, themed hair braiding Rhode Island, K-Pop inspired braids for kids, Providence children’s hair salon, kids hair styling at home RI, mobile kids braid party Rhode Island, special event braids for kids"
            />

    <div>
        <link rel="canonical" href="https://www.majesticbraids.com/" />
         <SaleBanner/>
         <Navbar/>
         <Header data={landingPageData.Header} />
         <Features data={landingPageData.Features} />
         <Gallery data={landingPageData.Gallery} />
         <Remu/>
         <About data={landingPageData.About} />
         {/* <ServiceAreas/> */}
         <Services data={landingPageData.Services} />
         <Testimonials data={landingPageData.Testimonials} />
         <Contact data={landingPageData.Contact} />
         <EmailPopup/>
     
       </div>
       </main>
  )
}

export default Home