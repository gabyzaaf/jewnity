import React, { useState } from "react";
import InvestorMsg from "./InvestorMsg";

export default function MessagesPage() {
  const [investorName, setInvestorName] = useState("");

  const investors = ["Maxim", "David", "Eyal"];

  if (investorName !== "") {
    return <InvestorMsg investorName={investorName}/>;
  } else {
    return (
      <div>
        <h1>3 Investors Are Interested In Your Project</h1>
        {investors.map((name) => (
          <div key={name} style={{ height: "5em", paddingTop: "2em" }}>
            {name} is interested in your project!
            <button
              style={{ marginLeft: "1em" }}
              onClick={() => setInvestorName(name)}
            >
              Click to Message {name}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
