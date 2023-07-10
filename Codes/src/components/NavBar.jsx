import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./megaMenu/MegaMenu";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [hover, setHover] = useState(false);
  const [item,setitem] = useState("")

  const style = {
    background: "linear-gradient(180deg, #05182e 90%, ##263956 9%)",
  };
  useEffect(() => {
    const handleScroll = () => {
      // Define the threshold value for scrolling
      const scrollThreshold = 100; // Adjust this value as needed

      // Check if the scroll position is greater than the threshold
      if (window.scrollY > scrollThreshold) {
        // Webpage has been scrolled a little bit
        setScroll(true);
        // Perform any actions or trigger events as needed
      }
      if (window.scrollY < scrollThreshold) {
        // Webpage has been scrolled a little bit
        setScroll(false);
        // Perform any actions or trigger events as needed
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (itemName) => {
    setHover(true);
    setitem(itemName)
    console.log(hover);
  };

  const handleMouseLeave = () => {
    setHover(false);
    console.log(hover);
  };
  const navElement = ["Services", "Careers", "Contact", "About Us"];
  return (
    <div
      className={`fixed z-50 w-full ${
        scroll && "shadow-2xl bg-[#052336]  ease-out duration-500"
      }  ${hover && "shadow-2xl bg-[#052336]  ease-out "}  `}>
      <div className="absolute inset-0"></div>
      <div className="relative" id="relative">
        <header>
          <div className="p-4">
            <nav className="flex justify-between items-center space-x-6 ">
              <Link to="/">
                <div>
                  <img src="/assets/logo.png" alt="Logo" className="w-2/3" />
                </div>
              </Link>
              <div className="flex space-x-6 justify-end items-center ">
                {navElement.map((item, index) => (
                  <div
                    className="text-[24px] cursor-pointer text-white group"
                    key={index}
                    onMouseEnter={()=>handleMouseEnter(item)}
                  >
                    {item}
                    <div className="bg-transparent  group-hover:bg-[#6090d8] h-[4px] rounded-full delay-100 ease-in-out w-1/2 "></div>
                    {}
                  </div>
                ))}
                <div className="bg-white w-[2px] h-8"></div>
                <img src="/assets/india.png" alt="Logo" className="w-8" />
              </div>
            </nav>
            {hover && <MegaMenu itemName={item}  onMouseLeave={handleMouseLeave} className="" />}
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
