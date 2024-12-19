import React, { useState } from "react";

const GlpiAccordion = () => {
  const accordion = [
    {
      id: "1",
      Title: "Helpdesk",
      points: [
        "1. Incident management",
        "2. Request management",
        "3. Problem management",
        "4. Change management",
        "5. SLA management",
        "6. Recurrent tickets",
        "7. Canned responses",
        "8. Ticket templates",
        "9. Linked projects",
        "10. Linked budget",
        "11. Linked assets",
        "12. Linked tickets",
        "13. Approvals (via email)",
        "14. Knowledge Base",
        "15. Tasks for tickets",
        "16. Customer satisfaction survey",
        "17. Dashboard",
        "18. Reports",
        "19. Forms",
        "20. Self-service",
        "21. Notifications",
        "22. Track time",
        "23. Automatic actions",
      ],
    },
    {
      id: "2",
      Title: "CMDB",
      points: [
        "1. Native inventory",
        "2. Inventory (agentless)",
        "3. Impact analysis",
        "4. License management",
        "5. Software management",
        "6. Rack management",
        "7. Linked tickets",
        "8. Linked problems",
        "9. Linked requests",
        "10. Linked changes",
        "11. Linked incidents",
        "12. Linked documents",
        "13. Asset lifecycle",
        "14. Financial and administrative information",
        "15. Warranty information",
        "16. Domains",
        "17. Antiviruses",
        "18. Dashboard",
        "19. Reports",
        "20. Create custom items (GenericObject plugin)",
        "21. Automatic actions",
      ],
    },
    {
      id: "3",
      Title: "Project management",
      points: [
        "1. Kanban",
        "2. GANTT",
        "3. Tasks tracking",
        "4. Linked documents",
        "5. Linked assets",
        "6. Impact analysis",
        "7. Knowledge Base",
        "8. Team management",
      ],
    },
    {
      id: "4",
      Title: "Financial management",
      points: [
        "1. Budget management",
        "2. Suppliers management",
        "3. Contact management",
        "4. Contract management",
        "5. License management",
        "6. Linked tickets",
      ],
    },
    {
      id: "5",
      Title: "User management",
      points: [
        "1. LDAP",
        "2. Oauth SSO application (Amazon/Azure/Facebook/Github/Gitlab/Google/Open ID connect)",
        "3. Entities",
        "4. Access & restrictions (rules)",
        "5. Self-service mode",
        "6. Control user without knowing the password (“Impersonate”)",
      ],
    },
    {
      id: "6",
      Title: "Customize GLPI",
      points: [
        "1. Select color palette",
        "2. Select language",
        "3. Select page layout",
        "4. Add your logo",
        "5. Install plugins from Marketplace",
        "6. API rest",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-20">
      <h1
        className="text-5xl lg:text-6xl block text-center mt-10 mb-24 text-[#206c8e] font-thin"
        style={{ textShadow: "2px 2px 5px" }}
      >
        GLPI Main Features:
      </h1>
      {accordion.map((x, index) => (
        <div
          key={x.id}
          className="bg-white w-[400px] md:w-[500px] mt-4 m-auto rounded-lg border border-gray-200 overflow-hidden"
        >
          <button
            className="flex w-full items-center justify-between p-4 text-left text-gray-900 font-medium bg-gray-50 hover:bg-gray-100 transition"
            onClick={() => toggleAccordion(index)}
          >
            <span>{x.Title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[1000px] p-4" : "max-h-0 p-0"
            } overflow-hidden`}
          >
            <ol className="text-gray-800">
              {x.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlpiAccordion;
