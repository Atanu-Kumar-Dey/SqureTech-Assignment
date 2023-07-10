import React from "react";
import ServiceMenu from "./ServiceMenu";
import CareersMenu from "./CareersMenu";
import AboutUsMenu from "./AboutUsMenu";
import ContactMenu from "./ContactMenu";

const MegaMenu = ({ itemName, onMouseLeave }) => {
  return (
    <div
      className="w-full pt-10 pb-5 min-h-fit bg-[#052336]  "
      onMouseLeave={onMouseLeave}>
      <div className="w-[90%] mx-auto text-white text-lg">
        {itemName === "Services" && <ServiceMenu />}
        {itemName === "About Us" && <AboutUsMenu />}
        {itemName === "Careers" && <CareersMenu />}
        {itemName === "Contact" && <ContactMenu />}
      </div>
    </div>
  );
};

export default MegaMenu;
