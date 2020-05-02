import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container landing">
      
      <div className="report-box">
        <div className="report-title">
        <h3>Report</h3>
        </div>
        <div className="report-shortcut-box">
          <div className="report-shortcuts">
            <Link to="/report">Antisemitic Event</Link>
          </div>
          <div className="report-shortcuts">
            <Link>Life at Risk</Link>
          </div>
          <div className="report-shortcuts">
            <Link>Natural Disaster</Link>
          </div>
        </div>
      </div>
      
      <br />
      
      <div className="community-box">
        <Link to="/community"> Community </Link>
      </div>
      
      <div className="Login-box">
        <Link to="/login"> Login  </Link>
        <Link to="/signin"> Signin </Link>
      </div>
    </div>
  );
}

export default Landing;
