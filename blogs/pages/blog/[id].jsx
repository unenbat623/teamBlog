import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/function";
import Loading from "@/components/Loader";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [BlogDetailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log("Router", id);

  const getBlogDetail = async () => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    console.log("Data", data.body_html);
    setDetailData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <div className="container flex w-[800px] flex-col items-center gap-8 mx-auto mt-[100px] max-w-4xl">
      <div>
        {!isLoading && (
          <div>
            <div>
              <h1 className="text-[36px] font-semibold text-slate-900">
                {BlogDetailData.title}
              </h1>
              <div className="flex items-center mt-5 gap-5">
                <div className="flex items-center gap-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={BlogDetailData?.user?.profile_image}
                    alt="avatar"
                  />
                  <h4 className="ml-2 text-[14px] text-slate-500">
                    {BlogDetailData?.user?.name}
                  </h4>
                  <p className=" text-[14px] text-slate-500">
                    {formatDate(BlogDetailData?.created_at)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <img className="rounded-md" src={BlogDetailData?.cover_image} />
              </div>
              <div
                className="blogcontent"
                dangerouslySetInnerHTML={{ __html: BlogDetailData?.body_html }}
              ></div>
            </div>
          </div>
        )}
        {isLoading && <Loading />}
      </div>
    </div>
  );
};
export default BlogDetail;
