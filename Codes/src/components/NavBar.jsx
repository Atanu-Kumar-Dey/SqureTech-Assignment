import React, { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Define the threshold value for scrolling
      const scrollThreshold = 10; // Adjust this value as needed

      // Check if the scroll position is greater than the threshold
      if (window.scrollY > scrollThreshold) {
        // Webpage has been scrolled a little bit
        console.log('Webpage has been scrolled.');
        // Perform any actions or trigger events as needed
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navElement = ["Service", "Careers", "Contact", "About Us", "I"];
  return (
    <div className="fixed z-50 w-full">
      <div className="absolute inset-0"></div>
      <div className="relative" id="relative">
        <header>
          <div className="p-4">
            <nav className="flex justify-between items-center space-x-6 ">
              <div>
                <img src="/assets/logo.png" alt="Logo" className="w-2/3" />
              </div>
              <div className="flex space-x-6 justify-end items-center">
               
                {navElement.map((item, index) => (
                  <div className="text-[24px] cursor-pointer text-white">{item}</div>
                ))}
                <img src="/assets/india.png" alt="Logo" className="w-8  cursor-pointer" />
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
