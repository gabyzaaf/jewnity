import React from "react";
import { Link } from "react-router-dom";

function ReportSelection() {
  return (
    <div className="container">

      <div className="event-box-container">
        <div className="selection-box">
          
          <label for="AntisemiticRally"><input
            name="AntisemiticRally"
            value="AntisemiticRally"
            type="checkbox"
            className="event-box"
          />Antisemitic Rally</label>
        </div>
        <div>
          
          <label for="PropertyDamage"><input
            name="PropertyDamage"
            value="PropertyDamage"
            type="checkbox"
            className="event-box"
          />Property Damage</label>
        </div>
        <div>
         
          <label for="PhysicalHarresment"> <input
            name="PhysicalHarresment"
            value="PhysicalHarresment"
            type="checkbox"
            className="event-box"
          />Physical Harresment</label>
        </div>
        <div>
          
          <label for="VerbalHarresment"><input
            name="VerbalHarresment"
            value="VerbalHarresment"
            type="checkbox"
            className="event-box"
          />Verbal Harresment</label>
        </div>
        <div>
          
          <label for="Other"><input
            name="Other"
            value="Other"
            type="checkbox"
            className="event-box"
          />Other</label>
        </div>
      </div>

      <div className="information-box">
        <div className="photo">
        <img
          src={require("../images/camera.png")}
          alt="Camera icon"
        />
        </div>
        <div className="location">
          <img 
          src={require("../images/Map.jpg")}
          alt="Map view"
        />
        </div>
        <div className="personal-info">
          <div className="name">
            <input type="text" placeholder="Please Enter Full Name"/>
          </div>
          <div className="telephone">
            <input type="text" placeholder="Please Enter Telephone Number"/>
          </div>
        </div>
      </div>

      <div className="report-title-box">
        <button className="send-button">
          <Link to="/report/result">Send</Link>
        </button>
      </div>
    </div>
  );
}

export default ReportSelection;
