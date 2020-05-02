import React from "react";
import "./InvestorList.css";
import { Link } from "react-router-dom";

export default function InvestorList() {
  const investors = [
    {
      name: "Maxim",
      bio:
        "Maxim is a 50 year old businessman residing in Atlanta. He is interested in investing in Health-Tech or Tikun Olam.",
    },
    // {
    //   name: "David",
    //   bio:
    //     "David is a 62 year old company owner residing in Moscow. He is looking to invest in Tikum Olam or in Fighting Poverty.",
    // },
    {
      name: "Shoshana",
      bio:
        "Shoshana is a 35 year old banker residing in Paris, France. She is looking to invest in Tikum Olam in Fighting Poverty.",
    },
  ];
  return (
    <div className="container investorlist">
      <h6 style={{ marginBottom: "1em" }}>We found 2 potential investors</h6>
      <div>
        {investors.map((investor) => (
          <Link to="/InvestorProfile">
            <div
              key={investor.name}
              style={{
                cursor: "pointer",
                display: "inline-block",
                height: "16vh",
                width: "70%",
              }}
            >
              <div>
                <img
                  src={require("../images/" + investor.name + ".jpg")}
                  alt="maxims page"
                  className="investorsImg"
                ></img>
              </div>
              {investor.bio}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
