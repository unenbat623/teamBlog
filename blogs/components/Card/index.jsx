import Link from "next/link";
import { formatDate } from "@/utils/function";

const Card = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id + blog.title}>
      <div className=" max-lg:w-full rounded-xl border border-[#E8E8EA] flex flex-col p-3 justify-center w-[392px] gap-3">
        <div className="h-[250px] lg:w-[370px]  bg-green-400  rounded-xl">
          <img
            src={blog.cover_image ? blog.cover_image : "/women.avif"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <span className="flex py-1 px-[10px] justify-center items-center gap-1 border-6 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md">
            {blog?.type_of}
          </span>
          <h1 className="text-2xl self-stretch truncate">{blog.title}</h1>
        </div>
        <div className="flex items-center gap-5">
          <img
            src={blog.user.profile_image}
            className="w-[50px] h-[50px] rounded-full "
          />
          <p className="text-[#97989F]">{blog.user.name}</p>
          <p className="text-[#97989F]">{formatDate(blog.created_at)}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
