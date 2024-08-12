import React from 'react'
import Navbar from '../landingPage/Navbar'
import CoursesSection from './Courses'
import Footer from '../landingPage/Footer'

const CoursePage = () => {
  return (
    <section className='pt-5'>
      <Navbar />
      <CoursesSection />
      <Footer />
    </section>
  )
}

export default CoursePage