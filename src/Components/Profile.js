import React from "react";

const interstYou = () => {
  alert("Your are interest by him");
};

export default function Profile() {
  
  const getName = [
    {
      name: "Maxim Cohen",
      investment_interest:
        "I would like to invest in the health or Tikoun Olam",
      background:
        "I am a programmer and work during 10 years as fullstack developper",
      Ivestment_prive: "Investment price is : 10,000$",
    },
  ];

  return (
    <div className="container profile">
      <h1>Information </h1>
      <div className="img-container">
      </div>
      {getName.map((x) => (
        <div>
          <p key={Math.random()}>{x.name}</p>
          <p>{x.investment_interest}</p>
          <p>{x.background}</p>
          <p>{x.Ivestment_prive}</p>
        </div>
      ))}
      <button onClick={interstYou}>CONNECT NOW</button>
    </div>
  );
}
