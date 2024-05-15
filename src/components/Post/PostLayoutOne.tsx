import { Post } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";

interface Props {
  post: Post;
}

const PostLayoutOne: React.FC<Props> = ({ post }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10" />
      <Image
        src={post.image.filePath.replace("../public", "")}
        alt={post.title}
        placeholder="blur"
        blurDataURL={post.image.blurhashDataUrl}
        width={post.image.width}
        height={post.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease-in-out duration-300"
      ></Image>
      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag
          link={`categories/${slug(post.tags[0])}`}
          name={post.tags[0]}
          className="px-6 text-sm py-2 !border"
        />
        <Link href={post.url} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-light mt-4">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]  dark:from-accentDark/50 dark:to-accentDark/50 group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {post.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};
export default PostLayoutOne;
