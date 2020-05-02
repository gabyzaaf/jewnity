import React from "react";
import { Link, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Landing from "./Landing";
import Report from "./Report";
import SelectProfileType from "./SelectProfileType";
import ReportResult from "./ReportResult";
import InvestorMsg from "./InvestorMsg";
import Profile from "./Profile";
import Causes from "./Causes";
import InvestorList from "./InvestorList";
import InvestorProfile from "./InvestorProfile";



function MainPage() {
  return (
    <div className="container">
      <div className="navbar">
        <Link to= "/main">Home</Link>
        <Link to= "/Profile">Profile</Link>
        <Link to= "/community">Community</Link>
        <Link to= "/report">Report</Link>
      </div>
      <div className="mainpage">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/main" component={Landing} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/report/result" component={ReportResult} />
        <Route exact path="/community" component={SelectProfileType} />
        <Route exact path="/InvestorMsg" component={InvestorMsg} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/InvestorList" component={InvestorList} />
        <Route exact path="/Causes" component={Causes} />
        <Route exact path="/InvestorProfile" component={InvestorProfile} />

        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/signin" component={Signin} /> */}
      </div>

      <div className="footer">
        <p> Powered by JDC - Copyright 2020</p>
      </div>
    </div>
  );
}

export default MainPage;
