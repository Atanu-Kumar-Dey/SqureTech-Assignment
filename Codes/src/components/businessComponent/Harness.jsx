import React from "react";

const Harness = () => {
  return (
    <div className="w-full flex">
      <div className=" flex flex-col space-y-5  p-20 text-[rgba(178, 178, 178, 1)] tracking-widest font-semibold w-1/2">
        <span className="text-[48px]">Harness change to create 360° value</span>
        <span className="text-sm text-[#7F7F7F]">
          In this ever-changing world, companies need to think fast and stay
          agile. And that requires strategies that work in the real world. With
          experience across the value chain, end-to-end, only Accenture helps
          clients create strategies that come not just from knowing, but from
          the know-how of doing. Our integrated model enables 360° value
          creation by giving our strategists the advantage of Accenture insights
          from AI and data science and deep industry expertise, combined with
          the experience of efficiently operating business functions, optimizing
          and running supply chains, designing and implementing technology, and
          building resilient operating models and cultures. Accenture Strategy
          leverages this advantage in our work with boards, CEOs, and C-suite
          executives to create 360° value for shareholders and stakeholders.
        </span>
        <div className="bg-[#6090d8] font-normal  cursor-pointer rounded-full text-white text-xl max-w-fit px-8 py-4 max-h-fit">
          Read More
        </div>{" "}
      </div>
      <div className="relative w-1/2 rounded-2xl flex bg-center bg-cover duration-500">
        <img src="/assets/harness.jpg" alt="Logo" className=" absolute h-auto w-4/5 top-[18%] left-[8%]" />
        <div className="w-1/2 my-28 bg-[#D1E8E6]"></div>
        <div className="w-1/2 h-full bg-[#6090D8]"></div>
      </div>
    </div>
  );
};

export default Harness;
