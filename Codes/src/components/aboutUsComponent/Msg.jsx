import React from "react";

const Msg = () => {
  const items = [
    { url: "/assets/msg1.jpg", text: "MAX " },
    { url: "/assets/msg2.jpg", text: "JOHHN " },
    { url: "/assets/msg3.jpg", text: "MARRY" },
    { url: "/assets/msg4.jpg", text: "MARRY " },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: "url('/assets/prefooter.jpg')" }}
        className="bg-cover bg-center flex flex-col justify-center items-center w-full min-h-full p-8 ">
        <span className="text-white text-[36px] font-semibold w-[90%] text-center">
          “We believe our people make the difference. we nurture their
          development,providing opportunities for learning and mutual growth.”
        </span>
        <div className="flex justify-between space-x-4 w-[90%] mb-5">
          {items.map((item, i) => (
            <div class="shadow-2xl bg-white flex flex-col text-center justify-start items-center p-2">
              <img src={item.url} className="w-full mb-4" alt="" />
              <div className="p-4">
                <div className="flex flex-col justify-start items-start text-center">
                  <span className="text-base tracking-tight font-extrabold my-4 text-[#999999]">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, blanditiis."
                  </span>
                  <div className="flex space-x-1 font-extrabold cursor-pointer">
                    -{item.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Msg;
