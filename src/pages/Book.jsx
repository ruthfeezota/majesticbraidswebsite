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
    <SaleBanner/>
    <Navbar/>
        <AppFlow/>
        <Contact/>
            
        
    </div>
  )
}

export default Book