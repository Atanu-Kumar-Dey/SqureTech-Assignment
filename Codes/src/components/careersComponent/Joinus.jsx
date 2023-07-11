import React from "react";

const Joinus = () => {
  return (
    <div className="w-[90%] my-10 flex mx-auto">
      <div className="w-1/2 flex flex-col p-4">
        <span className="text-2xl tracking-wide">Come join us</span>
        <span className="text-[42px] my-4 text-[#333333] font-extrabold tracking-wide">
          What is Lorem Ipsum
        </span>
        <p className="text-lg text-[#333333]">
          scrambled it to make a type{" "}
          <span className="text-[#6090D8]"> specimen book.</span> It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <span className="text-[#6090D8] flex justify-center items-center text-2xl my-16 cursor-pointer max-w-fit">
          <span className="mr-5">Executive Leaders </span>
          <img src="/assets/borderRight.png" className="w-8" alt="" />
        </span>
      </div>
      <div className="w-1/2 flex flex-col ">
        <div className="h-2/3 w-full">
          <img src="/assets/JoinUs.jpg" alt="" />
        </div>
        <span className="text-[#6090D8] flex justify-center items-center text-2xl my-12 cursor-pointer max-w-fit">
          <span className="mr-5">Entry Level Jobs</span>
          <img src="/assets/borderRight.png" className="w-8" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Joinus;
