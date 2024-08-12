import React, { useState } from 'react'
import { navLinks } from '../contants'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { logo } from '../assets/icons';

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  
  const handleClick = ()=>{
    setToggle(!toggle)
  }

 
  return (
    <div>
      <nav className='flex justify-between items-center padding-x max-sm:hidden'>
        <Link to='/'>
          <img src={logo} alt="" className='w-64' />
          {/* <span className='font-semibold text-primary'> ProfessionalTeachersHub </span> */}
        </Link>

       
        <div className='flex justify-between items-center gap-5 text-md text-primary '>
          {navLinks.map((navlink) => {
            return (
              <ul key={navlink.label}>
                <li>
                  <a className='hover:text-secondary ease-in-out delay-200'
                    href={navlink.href}>{navlink.label}</a>
                </li>
              </ul>
            )
          })}

        </div>




        <Link path to='/registerAs'>
          <Button content='Register/Login' />
        </Link>
      </nav>
      <nav className='flex justify-between items-center padding-x relative sm:hidden'>


        <Link to='/'>
          <img src={logo} alt="" className='max-sm:w-36' />
          {/* <span className='font-semibold text-primary'> ProfessionalTeachersHub </span> */}
        </Link>

        <Link onClick={handleClick}> {
          toggle
          ? <p> <FaBars className='text-primary text-2xl '/> </p>

          : <p> <FaTimes className='text-primary text-2xl '/>  </p>
        } </Link>

{
  toggle
  ? <div className='hidden'></div>
  : <div className='flex flex-col w-[100px] items-left gap-5 p-3 text-md bg-primary text-white  absolute right-[5%] top-[120%] rounded'>
  {navLinks.map((navlink) => {
    return (
      <ul key={navlink.label}>
        <li>
          <a className='hover:text-secondary ease-in-out delay-200'
            href={navlink.href}>{navlink.label}</a>
        </li>
      </ul>
    )
  })}

  {/* <Link path to='/registerAs'>
    <Button content='Register' />
  </Link>

  <Link path to='/login'>
    <button className='text-secondary bg-white border-secondary text-sm py-2 px-4 rounded-md'> Login </button>
  </Link> */}

</div>
  
}
        



      </nav>
    </div>
  )
}

export default Navbar