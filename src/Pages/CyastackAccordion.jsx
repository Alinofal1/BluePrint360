import React, { useEffect } from "react";
import { MdDoneOutline } from "react-icons/md";

const CyastackAccordion = () => {
  const accordion = [
    {
      id: "1",
      Title: "PERIMETER AND DATACENTER FIREWALLS",
      points: ``,
    },
    {
      id: "2",
      Title: "WEB APPLICATION SECURITY",
      points: ``,
    },
    {
      id: "3",
      Title: "DATA SECURITY",
    },
    {
      id: "4",
      Title: "INTRUSION DETECTION & PREVENTION",
    },
    {
      id: "5",
      Title: "MALWARE PROTECTION",
    },
    {
      id: "6",
      Title: "SECURE REMOTE ACCESS",
    },
    {
      id: "7",
      Title: "AUTHENTICATION, AUTHORIZATION AND ACCOUNTABILITY",
    },
    {
      id: "8",
      Title: "DATA LEAKAGE PREVENTION",
    },
    {
      id: "9",
      Title: "DATABASE SECURITY",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="mb-20">
      <div className="flex flex-col items-center">
        <h1
          className="text-4xl md:text-5xl block text-center mt-10 text-[#206c8e] font-thin"
          style={{ textShadow: "2px 2px 5px" }}
        >
          CYSTACK SOLUTIONS :
        </h1>
        <p
          className="mt-6 w-[400px] md:w-[500px] mb-10 text-[#11384a]"
          style={{ fontWeight: "500", textShadow: "0 0 8px" }}
        >
          CYSTACK is an innovative solutions provider that understands the
          importance of synergy in our customer’s infrastructure. CYSTACK
          partners with the top vendors in the local and international market
          and makes it a priority to provide best-in-class solutions. Some of
          our solutions include:
        </p>
      </div>
      {accordion.map((x) => (
        <div
          key={x.id}
          className=" bg-white w-[400px] md:w-[500px] mt-4 m-auto rounded-lg flex items-center "
        >
          <MdDoneOutline className="mx-2" />
          <h2 className="font-medium ">{x.Title}</h2>

          <ol className="mt-2 px-4 leading-relaxed text-gray-800 pb-10">
            <li>{x.points}</li>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default CyastackAccordion;
