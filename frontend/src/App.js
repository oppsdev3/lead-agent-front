import Navbar from './components/Navbar';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/signup/Signup";
import ErrorPage from "./components/ErrorPage";
import {
    BrowserRouter as Router , Routes, Route, Link
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardMainScreen from "./components/dashboard/DashboardMainScreen";
import Lead from "./components/dashboard/Lead";
import LeadStatus from "./components/dashboard/LeadStatus";
import Report from "./components/dashboard/Report";
import Profile from "./components/dashboard/Profile";
import React, {useState} from "react";


function App() {
    const [inactive, setInactive] = useState(false);
  return (

    <div className="App">
        <Navbar />
        <br/>
        <Dashboard onCollapse={(inactive) => {
                console.log(inactive);
                setInactive(inactive);
            } }/>
        <Routes>
            <Route path={'/home'} element={<Home /> }/>
            <Route path={'/about'} element={<About /> }/>
            <Route path={'/login'} element={<Login /> }/>
            <Route path={'/signup'} element={<Signup /> }/>
            <Route path={'/dashboard'} element={<Dashboard /> }/>
            <Route element={<ErrorPage /> } />

            <Route path={'/leads'} element={<Lead /> }/>
            <Route path={'/leadstatus'} element={<LeadStatus /> }/>
            <Route path={'/reports'} element={<Report /> }/>
            <Route path={'/profiles'} element={<Profile /> }/>
        </Routes>

    </div>

  );
}

export default App;
