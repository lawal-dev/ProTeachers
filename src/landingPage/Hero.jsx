import React from 'react'
import { bg, bg2, bg3 } from '../assets/images'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 gap-2 max-md:gap-8 items-center justify-center py-10 text-center leading-7 padding-x'>
      <div>
        <h1 className='text-4xl max-sm:text-3xl font-bold text-primary'>
          Welcome to <br /> Professional { }
          <span className='text-secondary'>
            Teachers
          </span> { }
          Hub
        </h1>
        <h2 className='text-sm max-sm:text-[12px]'>
          Find Reflect
          <span> Teaching Job </span>
          Or
          Hire Qualified Teachers
        </h2>

        <div className='gap-4 flex justify-center mt-5'>
          <Link path to='/registerAs'>
            <button className='bg-secondary text-white text-sm py-2 px-4 rounded-md'> Register </button>
          </Link>

          <Link path to='/login'>
            <button className='text-secondary bg-white border-secondary text-sm py-2 px-4 rounded-md'> Login </button>
          </Link>
        </div>

      </div>
      <div>
        <img src={bg2} alt="" />
      </div>
    </div>
  )
}

export default Hero