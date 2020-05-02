import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container">
      <Link to= "/main">
      <img className="welcome-image"
          src={require("../images/welcome.jpeg")}
          alt="welcome page"
        />
      </Link>
    </div>
  );
}

export default Welcome;
