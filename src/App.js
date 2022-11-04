import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";


import Userheader from "./components/Userheader";
import Header from "./components/Header";
import Userfooter from "./components/Userfooter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/user/Dashboard';
import Bookappointment from './pages/user/Bookappointment';
import Appointments from './pages/user/Appointments';
import Tutors from './pages/user/Tutors';
import Settings from './pages/user/Settings';
import Profile from './pages/user/Profile';
import Logout from './pages/user/Logout';
import TutorLogin from './pages/TutorLogin';
import Tutorhome from './pages/tutor/Tutorhome'
import Tutorheader from './components/TutorHeader';
import MyAppointments from './pages/tutor/MyAppointments';
import MyProfile from './pages/tutor/MyProfile';
import Mystudents from './pages/tutor/Mystudents';
import Mysettings from './pages/tutor/Mysettings';

window.user_id = "";


const HomeTemplate = () => {
  return (
    <div>
      <Header /> 
      <Outlet />
      <Footer />
    </div>
  );
}


const TutorTemplate = () => {
  return (
    <div>
      <Tutorheader /> 
      <Outlet />
      <Userfooter />
    </div>
  );
}

  const UserTemplate = () => {
    return (
      <div>
        <Userheader /> 
        <Outlet />
        <Userfooter />
      </div>
    );
  }

export default function App() {
  return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route index element={<Home/>}/>
              <Route path="/" element={<Home/>} />
              <Route path="*" element={<Navigate to='/' replace />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/tutorlogin" element={<TutorLogin/>}/>
            </Route>

            <Route path="" element={<UserTemplate />}>
              <Route path="/user/:user_id" element={<Dashboard/>}/>
              <Route path="/appointment/:user_id" element={<Bookappointment/>}/>
              <Route path="/viewappnt/:user_id" element={<Appointments/>}/>
              <Route path="/tutors/:user_id" element={<Tutors/>}/>
              <Route path="/settings/:user_id" element={<Settings/>}/>
              <Route path="/profile/:user_id" element={<Profile/>}/>
              <Route path="/logout" element={<Logout/>}/>
            </Route>
            
            <Route path="" element={<TutorTemplate />}>
              <Route path="/tutor" element={<Tutorhome/>}/>
              <Route path="/myappnt" element={<MyAppointments/>}/>
              <Route path="/myprofile" element={<MyProfile />}/>
              <Route path="/students" element={<Mystudents />}/>
              <Route path="/mysettings" element={<Mysettings />}/>
            </Route>
        </Routes>
      </Router>
      </React.Fragment>
    
  );
}
