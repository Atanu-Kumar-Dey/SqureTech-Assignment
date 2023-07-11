import React from "react";

import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
const FooterMsg = () => {
  const item = [
    { icon: <FiInstagram size={25} /> },
    { icon: <AiOutlineFacebook size={25} /> },
    { icon: <AiOutlineLinkedin size={25} /> },
  ];
  return (
    <div className="h-[100vh] w-full group">
      <div
        style={{ backgroundImage: "url('/assets/footermsg.jpg')" }}
        className="w-full h-full bg-center bg-cover">
        <div className="p-8">
          <img src="/assets/Msg.png" className="w-16" alt="" />
          <div className="text-[20px] flex flex-col items-start justify-start w-2/3">
            <div className="px-8">
              <span>
                Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
                expedita ut accusantium omnis qui expedita vitae aut quibusdam
                Lorem ipsum dolor sit amet. Quo itaque galisum vel molestias
                expedita
              </span>
              <div className="flex justify-items space-x-6  items-items mt-5">
                <img src="/assets/user.png" className="w-1/8" alt="" />
                <div className="flex flex-col items-start justify-start">
                  <span className="text-xl font-bold">Lorem ipsum</span>
                  <span className="text-lg">Founder of Squaretech</span>
                  <div className="flex space-x-3">
                    {item.map((item, index) => (
                      <div>{item.icon}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMsg;
