import React, {useState} from 'react';
import {
    BrowserRouter as Router , Routes, Route, Link
} from "react-router-dom";
import Lead from "./Lead";
import LeadStatus from "./LeadStatus";
import Report from "./Report";
import Profile from "./Profile";
import Dashboard from "./Dashboard";



const DashboardMainScreen =() => {

    const [inactive, setInactive] = useState(false);

    return(
      <div>
          <Dashboard onCollapse={(inactive) => {
              console.log(inactive);
              setInactive(inactive);
          } }/>
          <br/>
          <div className={`container ${inactive ? "inactive" : '' }`}>
              <Routes>
                  <Route exact path={'/leads'} element={<Lead /> }/>
                  <Route path={'/leadstatus'} element={<LeadStatus /> }/>
                  <Route path={'/reports'} element={<Report /> }/>
                  <Route path={'/profiles'} element={<Profile /> }/>
              </Routes>
          </div>

      </div>
    );
}

export default DashboardMainScreen;