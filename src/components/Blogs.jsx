
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-y-1 my-1 mb-[90px] ">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <div className="text-center font-bold text-3xl"> <Spinner></Spinner>
          </div>



        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
}
