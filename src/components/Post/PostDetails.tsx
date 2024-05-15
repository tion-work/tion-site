import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";
import ViewCounter from "./ViewCounter";

interface Props {
  post: Post;
  slug: string;
}

const PostDetails: React.FC<Props> = ({ post, slug: postSlug }) => {
  return (
    <div className="px-10 py-2 bg-accent dark:bg-accentDark text-light flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="m-3">
        <ViewCounter slug={postSlug} />
      </span>
      <div className="m-3">{post.readingTime.text}</div>
      <Link href={`/categories/${slug(post.tags[0])}`} className="m-3">
        #{post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
