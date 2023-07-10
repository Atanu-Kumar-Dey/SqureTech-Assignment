import React from "react";

const CoreCards = ({url,text}) => {
  return (
    <>
      <div class="min-w-fit shadow-2xl flex justify-start items-center p-4">
        <img src={url} className="w-[45%] mr-4" alt="" />
        <div className="flex flex-col justify-start items-start">
          <span className="text-[18px] font-bold max-w-fit border-[#6090d8] border-b-4 mb-5">
          {text}
          </span>
          <span>
            Lorem ipsum dolor sit amet Aut alias.Lorem ipsum dolor sit amet Aut
            alias.
          </span>
        </div>
      </div>
    </>
  );
};

export default CoreCards;
