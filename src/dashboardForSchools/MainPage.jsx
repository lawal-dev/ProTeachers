import React from 'react'
import Profile from './Profile';
import { FaBars } from 'react-icons/fa';



const MainPage = ({ renderContent, isSidebarOpen, setSidebarOpen }) => {



  return (





    <main >
    {/* Page header */}

    <div className='bg-secondary max-md:h-20 md:h-24 w-full p-1 flex justify-between items-center' >
      {isSidebarOpen
        ? <div className="flex justify-end md:p-4 max-md:p-1 ">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-5xl text-white">
            &times;
          </button>
        </div>
        : <p> <FaBars onClick={() => setSidebarOpen(true)} className='text-white text-2xl max-md:ml-4 md:ml-10 ' /> </p>

      }
      <div>
        <Profile />
      </div>
    </div>


    {/* 
    <Routes>
      
      <Route exact path='teacher-dashboard/:home' element={<Home />} />
      <Route path='teacher-dashboard/profile-page' element={<ProfilePage />} />
      <Route path='teacher-dashboard/findaJob' component={<FindAJob />} />
      <Route path='teacher-dashboard/notifications' Component={<Notifications />} />
      <Route path='teacher-dashboard/course-seclection' Component={<CoursesSection />} />
    </Routes>
     */}

    {renderContent()}

  </main >










  )
}

export default MainPage


{/* <Home />
      <ProfilePage />
      <FindAJob />
      <Notifications />
      <CoursesSection /> */}
