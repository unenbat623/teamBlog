import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="container mx-auto h-[60vh]">
      <div className="flex h-full justify-center m-auto gap-10 items-center">
        <h1 className=" text-7xl mt-8 ">404</h1>
        <div className=" w-[1px] h-[160px] mr-10 ml-10 bg-slate-400"></div>
        <div className="flex flex-col gap-5">
          <h1 className=" text-2xl">PAGE NOT FOUND</h1>
          <p className="text-[#696A75] text-lg">
            We're sorry, This page is unknown or does
            <br /> not exist the page you are looking for.
          </p>
          <div>
            <Link
              className="gap-5 rounded-md bg-[#4B6BFB] text-[#ffffff] py-3 px-4"
              href="/"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
