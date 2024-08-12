import React from 'react'
import Navbar from '../landingPage/Navbar'
import TrainingSection from './TrainingSection'
import Footer from '../landingPage/Footer'

const TrainingPage = () => {
  return (
    <div className='pt-5'>
      <Navbar />
      <TrainingSection />
      <Footer/>
    </div>
  )
}

export default TrainingPage