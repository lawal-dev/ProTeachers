import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import Steps from './Steps'
import Testimonial from './Testimonial'
import Cta from './Cta'
import Contact from './Contact'
import Footer from './Footer'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'



const Index = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])


  return (


    <div className='pt-5 max-w-[90rem] mx-auto '  >
      { loading
      ? <Loading/>
      :
        <div>

          <Navbar />
          <Hero />
          <About />
          <Features />
          <Steps />
          <Testimonial />
          <Cta />
          <Contact />
          <Footer />
        </div>

      } 
    </div>

  )
}

export default Index