import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";

interface Props {
  post: Post;
  slug: string;
}

const PostDetails: React.FC<Props> = ({ post, slug: string }) => {
  return (
    <div className=" px-10 py-2 bg-violet-500 text-white flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className=" m-3">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className=" m-3">10 views</span>
      <div className=" m-3">{post.readingTime.text}</div>
      <Link href={`/categories/${slug(post.tags[0])}`} className=" m-3">
        #{post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
