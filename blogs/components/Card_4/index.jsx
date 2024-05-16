import React from "react";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/function";

const FourCard = () => {
  const [blogpost, setBlogpost] = useState([]);

  const fetchblogpost = async () => {
    const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res1.json();
    setBlogpost(data1);
  };
  useEffect(() => {
    fetchblogpost();
  }, []);

  return (
    <div className="flex items-center justify-center gap-8 w-full">
      <div key={blogpost[0]?.id} className="flex-col items-start gap-8 flex ">
        <img src={blogpost[0]?.social_image} className="four_card_image" />
        <p className="text-[#97989F]">{formatDate(blogpost.created_at)}</p>
        <div className="flex flex-col items-start gap-4">
          <span className="flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md">
            {blogpost[0]?.type_of}
          </span>
          <h1 className="text-[#667085]">{blogpost[0]?.description}</h1>
        </div>
      </div>
    </div>
  );
};
export default FourCard;
