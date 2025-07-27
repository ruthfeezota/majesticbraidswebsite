import React from 'react'
import AppFlow from '../components/AppFlow'
import Navbar from '../components/Navbar'
import { Contact } from '../components/contact'
import GoogleReviews from '../components/GoogleReviews'
import ReviewSlider from '../components/ReviewSlider'
import SaleBanner from '../components/SaleBanner'

function Book() {
  return (
    <div>



     <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/*
        NOTE: <title> and <meta> tags are typically placed in the <head> section of your public/index.html file
        or managed using a library like react-helmet-async for dynamic content in React applications.
        They are included here as per your original structure, but consider moving them for best practice.
      */}
      <title>Book Mobile Hair Braiding in Providence RI | Majestic Braids RI</title>
      <meta
        name="description"
        content="Easily book expert braiding services in Providence, Cranston & beyond. Majestic Braids brings knotless, box, and twist styles to your doorstep."
      />
      <meta name="keywords" content="mobile hair braiding, book braider near me, Providence RI box braids, knotless braids Providence, braiding appointments RI, hair braiding Cranston RI, twist hairstyles RI, same day braiding Providence, at home braids RI, braider for events Providence, kids braiding Cranston, African braids RI, natural hair braiding, protective styles RI, hair braiding Woonsocket, braids for weddings RI, travel hair braider, late night braiding, affordable braiding RI, cornrows with designs, Senegalese twists RI, quick braids Providence, braiding service East Providence, book box braids RI, hair braiding specials RI, hair braiding with beads, braiding for alopecia, sensitive scalp braiding, emergency braiding RI, braiding consultation RI" />
    <link rel="canonical" href="https://www.majesticbraids.com/book" />

    <SaleBanner/>
    <Navbar/>
        <AppFlow/>
        <Contact/>
            
        </main>
    </div>
  )
}

export default Book