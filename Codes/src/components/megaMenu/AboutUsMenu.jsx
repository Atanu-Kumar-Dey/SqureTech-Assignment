import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const AboutusMenu = () => {
  const items1 = [
    { id: 1, name: "About SquareTech", link: "/aboutus" },
    { id: 2, name: "Investor Relations" },
    { id: 3, name: "Leadership" },
    { id: 4, name: "Inclusion & Diversity" },
    { id: 5, name: "How We Work with Clients" },
    { id: 6, name: "Sustainability" },
    { id: 7, name: "Case Studies" },
    { id: 8, name: "Newsroom" },
  ];
  const items2 = [
    { id: 1, name: "Strategy & Consulting" },
    { id: 2, name: "Song" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Operations" },
    { id: 5, name: "Industry X" },
  ];
  const items3 = [
    { id: 1, name: "About SquareTech in the India" },
    { id: 2, name: "Inclusion & Diversity in the India" },
  ];

  const data = [
    ["Executive Leaders", "Recruiting Process", "Rewards & Benifits"],
  ];
  return (
    <>
      <div className="mx-auto flex justify-center items-center">
        <div style={{ width: "25%" }}>
          <hr />
        </div>
        <span className="mx-5 font-semibold">WHO ARE WE</span>
        <div style={{ width: "25%" }}>
          <hr />
        </div>
      </div>
      <div className=" my-10  grid grid-cols-4 gap-4">
        {items1.map((item) => (
          <div key={item.id}>
            <Link to={item.link}>
              <span className="cursor-pointer glow"> {item.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="mx-auto flex justify-center items-center">
        <div style={{ width: "23%" }}>
          <hr />
        </div>
        <span className="mx-5 font-semibold">HOW WE’RE ORGANIZED</span>
        <div style={{ width: "23%" }}>
          <hr />
        </div>
      </div>
      <div className=" my-10 text-center  grid grid-cols-5 gap-4">
        {items2.map((item) => (
          <div key={item.id}>
            <span className="cursor-pointer glow"> {item.name}</span>
          </div>
        ))}
      </div>
      <div className="mx-auto flex justify-center items-center">
        <div style={{ width: "23%" }}>
          <hr />
        </div>
        <span className="mx-5 font-semibold">IN THE INDIA</span>
        <div style={{ width: "23%" }}>
          <hr />
        </div>
      </div>
      <div className=" my-10  grid grid-cols-3 gap-4">
        {items3.map((item) => (
          <div key={item.id}>
            <span className="cursor-pointer glow"> {item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutusMenu;
