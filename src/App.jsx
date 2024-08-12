import React from 'react'
import Index from './landingPage/Index'
import RegisterAs from './auth/RegisterAs'
import RegisterAsSchool from './auth/RegisterAsSchool'
import Login from './auth/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterAsTeacher from './auth/RegisterAsTeacher'
import CoursePage from './courses/CoursePage'
import ConferencePage from './conferences/ConferencePage'
import TrainingPage from './training/TrainingPage'
import SchoolsRecruitmentDashboard from './dashboardForSchools/Dashboard'
import TeachersRecruitmentDashboard from './dashboardForTeacher/Dashboard'
import Dashboards from './Dashboards'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './contextApi/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
const App = () => {

  return (
    <AuthProvider>
      <Routes>

        {/* Public Route */}
        <Route>
          <Route path='/registerAs' element={<RegisterAs />} />
          <Route path='/registerAsTeacher' element={<RegisterAsTeacher />} />
          <Route path='/registerAsSchool' element={<RegisterAsSchool />} />
          <Route path='/login' element={<Login />} />
          <Route path='/courses' element={<CoursePage />} />
          <Route path='/conferences' element={<ConferencePage />} />
          <Route path='/trainings' element={<TrainingPage />} />
          <Route index element={<Index />} />
        </Route>


        {/* Private Route */}
        <Route element={<PrivateRoutes />}>
          <Route path='/teacher-dashboard' element={<TeachersRecruitmentDashboard />} />
          <Route path='/school-dashboard' element={<SchoolsRecruitmentDashboard />} />
          {/* <Route path='/dashboard' element={<Dashboards />} /> */}
        </Route>


      </Routes>
      <ToastContainer />
    </AuthProvider>

  )
}

export default App