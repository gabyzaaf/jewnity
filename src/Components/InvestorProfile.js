import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const maximsProfile = [
    {
      name: "Maxim Cohen",
      investment_interest:
        "I would like to invest in the health or Tikun Olam",
      background:
        "I am a programmer and work during 10 years as fullstack developper",
      investment_price: "I would like to invest 10,000 $",
    },
  ];

  return (
    <div className="container investorprofile">
      <h1>Information </h1>
      <div >
      </div>
      {maximsProfile.map((x) => (
        
        <div id="investorProfile">

          <p key={Math.random()}>{x.name}</p>
          <div>
            <img src={require("../images/Maxim.jpg")} alt="maxims page" className="maximImg"></img>
          </div>
          <p>{x.investment_interest}</p>
          <p>{x.background}</p>
          <p>{x.investment_price}</p>
        </div>
      ))}

      <Link to="/investorMsg">
     <button class="maximsBtn"  >
        Contact Maxim!
     </button>
 </Link>
    </div>
  );
}
