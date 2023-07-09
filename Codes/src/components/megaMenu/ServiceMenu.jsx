import React from "react";
import "./style.css"
const ServiceMenu = () => {
  const data = [
    [
      "Application Services",
      "Artificial Intelligence",
      "Business Process Outsourcing",
      "Business Strategy",
      "Change Management",
    ],
    [
      "Cloud",
      "Customer Experience",
      "Digital Engineering & manufacturing",
      "Data & Analytics ",
      "Digital Commerce ",
    ],
    [
      "Ecosystem Services ",
      "Finance Consulting ",
      "Mergers & Acquisitions(M&A)",
      "Marketing ",
    ],
    ["Sustainablity", "Supply Chain Management", "Operating ", "Metaverse"],
    ["Technology ", "Consulting", "Zero-Based transformation"],
  ];
  return (
    <div className="flex">
      {data.map((item, index) => (
        <div className="flex flex-col space-y-10">
          {item.map((itemName, i) => (
            <div>
              <span className="cursor-pointer  glow">
              
                {itemName}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceMenu;
