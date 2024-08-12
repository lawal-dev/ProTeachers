import React, { useState } from "react";
import Aside from "./Aside";
import MainPage from "./MainPage";
import ProfilePage from "./Aside/ProfilePage";
import Home from "./Aside/Home";
import Notifications from "./Aside/Notifications";
import PostAJob from "./Aside/PostAJob";
import PostedJobs from "./Aside/PostedJobs";
import Applicants from "./Aside/Applicants";

const SchoolsRecruitmentDashboard = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Profile":
        return <ProfilePage />;
      case "Post a Job":
        return <PostAJob />;
      case "Posted Jobs":
        return <PostedJobs />;
      case "Applicants":
        return <Applicants />;
      case "Notifications":
        return <Notifications />;
      default:
        return null;
    }
  };



  return (


  
    <div className="md:flex md:flex-row">

      {/* Sidebar */}

      {/* <div className="bg-primary text-white w-full md:w-64 max-md:w-full flex-shrink-0 h-screen fixed"> */}
      <div className={`fixed top-0 left-0 h-screen max-md:w-full md:w-64 bg-primary text-white transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Aside setSidebarOpen={setSidebarOpen} handlePageChange={handlePageChange} />
      </div>

      {/* Main content */}
      {/* {isSidebarOpen && */}
        <div className={`md:flex-grow ${isSidebarOpen ?'md:ml-64' :'max-md:w-full'}`}>
          <MainPage isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} renderContent={renderContent} />
        </div>
      {/* } */}
    </div>



  );
};


export default SchoolsRecruitmentDashboard;
