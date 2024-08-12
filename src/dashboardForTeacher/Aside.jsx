import React, { useEffect, useState } from 'react'
import { TeacherAsideBar } from '../contants'
import { FaLongArrowAltUp, FaSignOutAlt, } from 'react-icons/fa'
// import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from '../contextApi/AuthContext';
import { useNavigate } from 'react-router-dom';
import Icon from '../icons/Icons';
import { logo } from '../assets/icons';

const Aside = ({ handlePageChange, setSidebarOpen}) => {
  const { logOut } = useContext(AuthContext);
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
      setSidebarOpen(false);
    }
  };
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
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
          {TeacherAsideBar.map((asidebar) => {
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
  )
}

export default Aside