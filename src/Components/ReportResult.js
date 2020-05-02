import React from "react";
import { Link } from "react-router-dom";

function ReportResult() {
  return (
    <div className="container reportresult">
      <div className="received">
        <h5>Your report has been received.</h5>
      </div>
      <div className="personal-information">
        <p>Name: Alex </p>
        <p>Age: 21 </p>
        <p>Telephone : +1 786-608-6037 </p>
        <p>Location:</p>
        <img
          src={require("../images/location.jpg")}
          alt="location information"
        />
      </div>
      <div className="report-result">
        <h5>
          Thank you for helping us secure our community safety. If you would
          like to contact your regional emissary please <Link>Click Here</Link>
        </h5>
      </div>
      <div className="report-map"></div>
    </div>
  );
}

export default ReportResult;
