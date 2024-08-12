import React, { useState, useEffect } from 'react'
import { SchoolAsideBar } from '../contants'
import { FaLongArrowAltUp, FaSignOutAlt, } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthContext';
import { logo } from '../assets/icons';
import Icon from '../icons/Icons';

const Aside = ({handlePageChange, setSidebarOpen}) => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      // Run this function only on mobile screens
      setSidebarOpen(false);
    }
  };


  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error));
  };

  return (
    <aside className=" ">
      {/* Sidebar content */}
      <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-6xl absolute z-10 top-0 right-1"
          >
            &times;
          </button>
        </div>

      <div className="p-4 ">
        {/* <h2 className="text-lg font-bold mb-4">ProfessionalTeachersHub</h2> */}
        <div className='bg-white w-fit px-2 py-2 my-2 mx-auto'>
          <img src={logo} alt="" srcset="" className='w-64'/>
        </div>
        <div className='overflow-auto scrollbar-hidden'>
          {SchoolAsideBar.map((asidebar) => {
            return (
              <ul key={asidebar.id}  onClick={handleClick} >
                <li className="py-4 px-2 hover:bg-orange-800 flex items-center  gap-4 cursor-pointer rounded-md" onClick={() => handlePageChange(asidebar.title)}>

                  <Icon type={asidebar.icon} />

                  <p></p>
                  <a href="#" className="block" >{asidebar.title}</a>
                </li>
              </ul>
            )

          })}
          {/* Add more sidebar links */}
        </div>
        <div className='absolute bottom-10 flex items-center gap-2 cursor-pointer' onClick={handleSignOut} >
          <FaSignOutAlt />
          <p>Logout</p>
        </div>
      </div>

    </aside>
    // <aside className="bg-primary text-white w-full lg:w-64 flex-shrink-0 h-screen fixed">
    //   {/* Sidebar content */}
    //   <div className="p-4 ">
    //     <h2 className="text-lg font-bold mb-4">ProfessionalTeachersHub</h2>
    //     <div>
    //       {SchoolAsideBar.map((asidebar) => {
    //         return (
    //           <ul key={asidebar.id} >
    //             <li className="py-4 px-2 hover:bg-orange-800 flex gap-4 cursor-pointer rounded-md" onClick={() => handlePageChange(asidebar.title)}>
    //               {/* <a href="">{asidebar.icon}</a> */}
    //               <a href="#" className="block" >{asidebar.title}</a>
    //             </li>
    //           </ul>
    //         )

    //       })}
    //       {/* Add more sidebar links */}
    //     </div>
    //     <a className='absolute bottom-10 flex items-center gap-2 cursor-pointer' onClick={handleSignOut} >
    //       <FaSignOutAlt />
    //       <p>Logout</p>
    //     </a>
    //   </div>

    // </aside>
  )
}

export default Aside