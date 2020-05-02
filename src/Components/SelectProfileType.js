import React from "react";
// import Causes from "./Causes";
import { Link } from "react-router-dom";

export default function SelectProfileType() {
  return (
    <div className="container profiletype">
      <h5>Connect with potential investors or entrepreneurs</h5>
      <Link to="/Causes">
        <div id="top">
          <div>I am looking for an investor</div>
        </div>
      </Link>
      <div id="bottom">
        <div>I am looking to invest</div>
      </div>
    </div>
  );
}
