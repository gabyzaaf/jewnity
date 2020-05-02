import React from "react";
import ReportSelection from "./ReportSelection";

function Report() {
  return (
    <div className="container report">
      <div className="report-title-box">
        <h3>Antisemitic Event</h3>
      </div>
      <div className="report-select-box">
        <ReportSelection />
      </div>
    </div>
  );
}

export default Report;
