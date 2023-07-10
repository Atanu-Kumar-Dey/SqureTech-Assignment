import React from "react";

const Join = () => {
  return (
    <div
      className="min-h-full bg-cover flex flex-col justify-start items-center p-8"
      style={{ backgroundImage: "url('/assets/join.jpg')" }}>
      <span className="uppercase text-[40px] font-extrabold text-white">
        Join with us
      </span>
      <span className="text-[36px] font-bold text-white text-center my-5 w-[80%] mx-auto">
        “Your career is about what you want to be and who you want to be. It’s
        about bringing your skills,your curiosity and your best true self to
        your work.”
      </span>
      <div className="bg-[#6090d8] font-normal cursor-pointer rounded-full text-white text-xl max-w-fit px-10 py-4 max-h-fit">
        Connect with us
      </div>
    </div>
  );
};

export default Join;
