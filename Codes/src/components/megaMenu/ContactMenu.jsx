import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { BiSolidEnvelope } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";
import "./style.css"
const ContactMenu = () => {
  const items = [
    { icon: <MdAddIcCall size={50}/>, msg1: "+918888886666", msg2: "GENERAL QUERIES" },
    { icon: <BiSolidEnvelope size={50}/>, msg1: "support@squaretech.com", msg2: "MAIL" },
    {
      icon: <BsFillBuildingsFill size={50}/>,
      msg1: "Find A Location",
      msg2: "FIND ALL OFFICE LOCATIONS",
    },
  ];
  return (
    <>
      <div className="mx-auto flex flex-row justify-center items-center">
        <div style={{ width: "23%" }}>
          <hr />
        </div>
        <span className="mx-5 font-semibold">CONTACT SQUARETECH</span>
        <div style={{ width: "23%" }}>
          <hr />
        </div>
      </div>
      <div className="flex w-full justify-center my-10">
        <p>
          We appreciate your interest in SquareTech. Please select from the
          options below.
        </p>
      </div>
      <div className="flex justify-between items-center">
        {items.map((item, index) => (
          <div className="flex flex-col justify-center items-center space-y-3">
            <div className="glow">{item.icon}</div>
            <div>{item.msg1}</div>
            <div>{item.msg2}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactMenu;
