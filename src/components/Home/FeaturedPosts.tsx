import { Post } from "@/.contentlayer/generated";
import { sortPosts } from "@/src/utils";
import React from "react";
import PostLayoutOne from "../Post/PostLayoutOne";
import PostLayoutTwo from "../Post/PostLayoutTwo";

interface Props {
  posts: Post[];
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => {
  const sortedPosts = sortPosts(posts);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        FeaturedPosts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <div className="col-span-1 row-span-2 relative">
          <PostLayoutOne post={sortedPosts[1]} />
        </div>
        <div className="col-span-1 row-span-1 relative">
          <PostLayoutTwo post={sortedPosts[2]} />
        </div>
        <div className="col-span-1 row-span-1 relative">
          <PostLayoutTwo post={sortedPosts[3]} />
        </div>
      </div>
    </section>
  );
};
export default FeaturedPosts;
