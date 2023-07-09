import React from "react";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  const data = [
    {
      name: "SITEMAP",
      item: ["HOME", "SERVICES", "CAREERS", "ABOUT", "INDUSTRIES"],
    },
    { name: "RESOURCES", item: ["HELP", "BLOG", "PRIVACY"] },
    {
      name: "FOLLOW US",
      item: [
        <FiInstagram size={25} />,
        <AiOutlineFacebook size={25} />,
        <AiOutlineLinkedin size={25} />,
      ],
      lastRow: true,
    },
  ];
  return (
    <div className="flex flex-col bg-[rgba(0,0,0,0.96)] text-white text-lg">
      <div className="border-b-2 border-white">
        <div className="flex mx-auto w-[90%] mt-12 justify-center items-center ">
          <div className="w-1/2">
            <div className="flex flex-col justify-center items-left text-left ">
              <span className="text-[50px]">SquareTech</span>

              <span className="my-5">
                Lorem ipsum dolor sit amet. Quo itaque.
              </span>
              <div className="relative flex">
                {" "}
                <input
                  type="text"
                  className="w-7/12 mx-left mb-5 h-12 border-1 relative decoration-"
                />
                <button className="bg-[#6090d8] h-12 px-4 py-2 text-white">
                  Subsribe
                </button>
              </div>
              <span className="">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company
              </span>
            </div>
          </div>

          <div className="w-1/2 my-20 flex justify-center items-start space-x-20 text-left">
            {data.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <span className="text-xl mb-5">{item.name}</span>
                {!item.lastRow &&
                  item.item.map((itemName) => (
                    <span className="text-base mb-3 cursor-pointer delay-150 hover:text-[#6090d8]">{itemName}</span>
                  ))}
                <div className="flex space-x-4">
                  
                {item.lastRow &&
                  item.item.map((itemName) => (
                    <span className="text-base mb-3 cursor-pointer delay-150 hover:text-[#6090d8]">{itemName}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] flex justify-between items-center leading-6 mx-auto my-5">
        <div>©2022 SquareTech. All rights reserved.</div>
        <div className="flex justify-center items-center space-x-5">
          <span className="cursor-pointer border-b-2 border-transparent hover:border-white hover:delay-100">
            Privacy Policy{" "}
          </span>
          <span className="cursor-pointer border-b-2 border-transparent hover:border-white hover:delay-100">
            Terms of service{" "}
          </span>
          <span className="cursor-pointer border-b-2 border-transparent hover:border-white hover:delay-100">
            Cookies Settings{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
