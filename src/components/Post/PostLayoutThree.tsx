import { Post } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns/format";

interface Props {
  post: Post;
}

const PostLayoutThree: React.FC<Props> = ({ post }) => {
  return (
    <div className=" group flex flex-col items-center text-black">
      <Link href={post.url} className="h-full rounded-xl overflow-hidden">
        <Image
          src={post.image.filePath.replace("../public", "")}
          alt={post.title}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          width={post.image.width}
          height={post.image.height}
          className="w-full h-full object-center object-cover aspect-[4/3] group-hover:scale-105 transition-all ease-in-out duration-300"
        ></Image>
      </Link>

      <div className="w-full flex flex-col mt-4">
        <span className="uppercase text-violet-500 font-semibold text-sm">
          {post.tags[0]}
        </span>
        <Link href={post.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg">
            <span className="bg-gradient-to-r from-violet-500/50 to-violet-500/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {post.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-black/50 font-semibold text-base">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};
export default PostLayoutThree;
