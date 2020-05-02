import React from "react";
// import InvestorList from "./InvestorList"
import { Link } from "react-router-dom";


export default function Causes() {
    

    return (
      <div id="causesContainer">
        <Link to={"/InvestorList"}>
        <div id="topCauses">
          <div>Tikun Olam</div>
        </div>
        </Link>
        <div id="middleCauses">
          <div>Fighting Poverty</div>
        </div>
        <div id="bottomCauses">
          <div>Health Tech</div>
        </div>
      </div>
    );
  
}
