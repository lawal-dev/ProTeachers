import React from 'react'
import { school, teacher } from '../assets/icons'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const RegisterAs = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      {
        loading
        ? <Loading/>
        :

      <div className='padding-x h-screen flex items-center justify-center flex-col relative'>
        <Link to='/'>
          <div className='absolute top-3 left-4'>
            <Button content='Back Home' />
          </div>
        </Link>
        <div className='text-center mb-9'>
          <h1 className='text-4xl font-semibold text-primary uppercase'> Register</h1>
          <span className='text-md  text-secondary text-opacity-75'> as </span>
        </div>

        <div className='flex justify-between items-center gap-20 max-sm:flex-col max-sm:gap-10'>

          <Link to="/registerAsTeacher">
            <div className='text-center cursor-pointer'>
              <img src={teacher} alt="" className='img' />
              <p className='font-semibold text-md text-secondary py-4'> Teacher </p>
            </div>
          </Link>

          <Link to='/registerAsSchool'>
            <div className='text-center cursor-pointer'>
              <img src={school} alt="" className='img' />
              <p className='font-semibold text-md text-secondary py-4'> School </p>
            </div>
          </Link>

        </div>
      </div>
    }
    </div>
  )
}

export default RegisterAs