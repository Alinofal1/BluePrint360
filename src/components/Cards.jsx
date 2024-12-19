import React from "react";
import CardImg1 from "./images/1.png";
import CardImg2 from "./images/2.png";
import CardImg3 from "./images/3.png";
import CardImg4 from "./images/4.png";
import CardImg5 from "./images/5.png";

const Cards = () => {
  const card = [
    {
      id: "1",
      img: CardImg1,
      color: "#FFFFFF",
      textcolor: "#116388",
      h1: "IT Governance",
      text: "Procedures and Policies, ITSM, CMDB, Compliance Frameworks, Risk Management Dashboard & Reporting",
    },
    {
      id: "2",
      img: CardImg4,
      color: "#192f3a",
      textcolor: "#FFFFFF",
      h1: "Digitization",
      text: "Workflow redesign, cloud solutions, and digital transformation strategies.",
    },
    {
      id: "3",
      img: CardImg5,
      color: "#FFFFFF",
      textcolor: "#116388",
      h1: "Quality & Project Management",
      text: "Business Process Model and Notation (BPMN), ISO standard implementations and quality audits, ITIL.",
    },
    {
      id: "4",
      img: CardImg2,
      color: "#192f3a",
      textcolor: "#FFFFFF",
      h1: "Consultation",
      text: "Process automation, Process Analysis, Gap Assessment, BRD, Security Assessment.",
    },
    {
      id: "5",
      img: CardImg3,
      color: "#FFFFFF",
      textcolor: "#116388",
      h1: "Cybersecurity",
      text: "Threat detection, incident response, and managed services.",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap mb-14">
      {card.map((x) => (
        <div
          key={x.id}
          className="card m-10 text-center w-52"
          style={{ color: `${x.textcolor}` }}
        >
          <div
            className="card-body mt-[50px] rounded-2xl min-h-[330px]"
            style={{
              backgroundColor: `${x.color}`,
              boxShadow: "10px 10px 20px 3px #206c8e",
            }}
          >
            <div className="card-img">
              <img src={x.img} alt="" className="w-40 m-auto p-8" />
              <div className="card-h1">
                <h1 className="text-2xl">{x.h1}</h1>
                <div className="card-text">
                  <p className="p-2 pb-4 text-balance">{x.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
