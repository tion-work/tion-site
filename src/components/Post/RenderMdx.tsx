"use client";
import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";

interface Props {
  post: Post;
}

const mdxComponent = {
  Image,
};

const RenderMdx: React.FC<Props> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div
      className="col-span-8 font-in prose prose-lg max-w-max 
    prose-blockquote:bg-violet-500/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-violet-500 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
    prose-li:marker:text-violet-500"
    >
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
