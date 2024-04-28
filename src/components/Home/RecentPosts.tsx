import { Post } from "contentlayer/generated";
import { sortPosts } from "@/src/utils";
import Link from "next/link";
import React from "react";
import PostLayoutThree from "../Post/PostLayoutThree";

interface Props {
  posts: Post[];
}

const RecentPosts: React.FC<Props> = ({ posts }) => {
  const sortedPosts = sortPosts(posts);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          RecentPosts
        </h2>
        <Link
          href={"/categories/all"}
          className="inline-block font-medium text-violet-500 underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-rows-2 grid-cols-3 gap-16 mt-16">
        {sortedPosts.slice(4, 10).map((post, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <PostLayoutThree post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default RecentPosts;
