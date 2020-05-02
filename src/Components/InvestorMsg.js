import React from "react";
import { Link } from "react-router-dom";


export default function InvestorMsg() {
    return (
      <div className="container investormsg">
        <header>You have message from Maxim</header>
        <Link to="/Profile">
        <button class="maximsBtn">Connect with Maxim</button>
        </Link>
      </div>
    );
  } 


