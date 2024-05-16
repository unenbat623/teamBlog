import React from "react";

export const ContactBig = () => {
  return (
    <div>
      <div className="flex flex-col p-4">
        <div className=" items-center">
          <h1 className=" items-start text-4xl font-normal mb-5 flex flex-col ">
            Contact Us
          </h1>
        </div>
        <p className="text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam. Lorem ipsum
          <br /> dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut
          <br /> labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <div className="flex  mt-5 gap-12 ">
          <div className="rounded-[10px] border border-slate-500 p-4 w-[50%]">
            <h1 className=" text-2xl gap-1">Address</h1>
            <p className="mt-1 text-[#696A75]">
              1328 Oak Ridge Drive, Saint <br />
              Louis, Missouri
            </p>
          </div>
          <div className="rounded-md border border-slate-500 p-4 w-[50%]">
            <h1 className=" text-2xl gap-1">Contact</h1>
            <p className="mt-1 text-[#696A75]">
              313-332-8662 <br />
              info@email.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
