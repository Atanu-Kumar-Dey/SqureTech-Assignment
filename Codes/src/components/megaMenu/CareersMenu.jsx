import React from "react";
import "./style.css";
const CareersMenu = () => {
  const items1 = [
    { id: 1, name: 'Executive Leaders' },
    { id: 2, name: 'Rewards & Benifits' },
    { id: 3, name: 'Recruiting Process' },
    { id: 4, name: 'Training & Development' },
    { id: 5, name: 'Milatery and Veterans' },
    { id: 5, name: 'Entry Level Jobs & internships' },
    { id: 5, name: 'Experienced Professionals' },
  ];
  const items2 = [
    { id: 1, name: 'Search Jobs by Areas of Expertise' },
    { id: 2, name: 'Operations Jobs' },
    { id: 3, name: 'Cloud Jobs' },
    { id: 4, name: 'Consulting Jobs' },
    { id: 5, name: 'SAP Jobs' },
    { id: 6, name: 'Stratergy Jobs' },
    { id: 7, name: 'Cybersecurity Jobs' },
    { id: 8, name: 'Corporates jobs' },
    { id: 9, name: 'Metaverse Jobs' },
    { id: 10, name: 'Federal Jobs ' },
    { id: 11, name: 'Digital Jobs' },
    { id: 12, name: 'Technology Jobs' },
    { id: 13, name: 'Digital Engineering and Manufacturing Jobs' },
    { id: 14, name: 'AI Jobs' },
    { id: 15, name: 'Salesforce Jobs' },
  ];

  const data = [
    ["Executive Leaders", "Recruiting Process", "Rewards & Benifits"],
  ];
  return (
    <>
      <div className="flex w-1/3 items-center justify-between font-semibold tracking-wider  mb-5">
        <div className="flex justify-center text-[#6090d8]">
          <div className="bg-[#6090d8] mx-2 w-[4px] h-7"></div>OVERVIEW
        </div>
        <span>CAREER HOME</span>
      </div>
      <div className="mx-auto flex justify-center items-center">
        <div style={{ width: "25%" }}>
          <hr />
        </div>
        <span className="mx-5 font-semibold">JOIN US</span>
        <div style={{ width: "25%" }}>
          <hr />
        </div>
      </div>
      <div className=" my-10  grid grid-cols-4 gap-4">
      {items1.map(item => (
        <div key={item.id}>
         <span className="cursor-pointer glow"> {item.name}</span>
        </div>
      ))}
    </div>
    <div className="mx-auto flex justify-center items-center">
        <div style={{ width: "23%" }}>
          <hr />
        </div>
        <span className="mx-5 font-semibold">EXPLORE JOBS</span>
        <div style={{ width: "23%" }}>
          <hr />
        </div>
      </div>
      <div className=" my-10  grid grid-cols-5 gap-4">
      {items2.map(item => (
        <div key={item.id}>
         <span className="cursor-pointer glow"> {item.name}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default CareersMenu;
