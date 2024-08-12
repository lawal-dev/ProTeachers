import React from 'react'
import Navbar from '../landingPage/Navbar'
import Footer from '../landingPage/Footer'
import ConferenceSection from './ConferenceSection'

const ConferencePage = () => {
  return (
    <div className='pt-5'>
        <Navbar/>
        <ConferenceSection/>
        <Footer/>
    </div>
  )
}

export default ConferencePage