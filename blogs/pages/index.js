import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { getData } from "@/utils/function";
import FourCard from "@/components/Card_4";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(9);

  const getBlogs = async () => {
    try {
      const data = await getData(
        `https://dev.to/api/articles?per_page=${pages}`
      );
      console.log(data);
      setBlogs(data);
    } catch (err) {
      setError("Error, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  function handleNext() {
    setPages(pages + 3);
  }

  useEffect(() => {
    getBlogs();
  }, [pages]);

  return (
    <main className={`container mx-auto`}>
      <section>
        {isLoading && <Loader />}
        {error && (
          <h1 className="text-red-500 text-3xl text-center my-10">{error}</h1>
        )}
        {!isLoading && !error && (
          <>
            <h1 className="p-5 text-4xl">Recent Blogs</h1>
            <div>
              <FourCard />
            </div>
            <h2 className="p-5 text-4xl">All blog post</h2>
            <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3   gap-5">
              {blogs.map((blog, i) => (
                <Card blog={blog} />
              ))}
            </div>
            <div className="flex  justify-center items-center my-3 ">
              <button
                onClick={handleNext}
                className="text-[16px] rounded-md border border-slate-300 py-3 px-5 gap-3 hover:bg-green-400"
              >
                Load More ...
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
