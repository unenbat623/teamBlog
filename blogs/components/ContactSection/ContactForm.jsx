import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <div className="flex pt-[29px] pb-[26px] pl-[130px] pr-[35px] items-center bg-[#F6F6F7]">
        <div className="flex flex-col items-start gap-6">
          <h1 className=" text-lg">Leave a Message</h1>
          <div className="w-[589px] h-[39px] flex gap-5 flex-shrink-0">
            <input
              placeholder="Your Name"
              className=" py-4 pl-4 pr-5 gap-3 w-[225px] h-[38px] flex items-center border rounded-md"
            ></input>
            <input
              placeholder="Your Email"
              className="py-4 pl-4 pr-5 gap-3 w-[225px] h-[38px] flex items-center border rounded-md"
            ></input>
          </div>
          <div className="gap-5">
            <input
              placeholder="Subject"
              className="py-4 pl-4 pr-5 gap-3 w-[470px] h-[38px] flex items-center border rounded-md "
            ></input>
          </div>
          <div className=" h-[140px] gap-5">
            <textarea
              placeholder="Write a message"
              className="py-4 pl-4 pr-5 gap-3 w-[470px] h-[134px] flex items-start border rounded-md"
            ></textarea>
          </div>
          <div className=" py-3 px-4">
            <button className=" inline-flex flex-col justify-center items-center rounded-md bg-[#4B6BFB] text-[#ffffff] py-3 px-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
