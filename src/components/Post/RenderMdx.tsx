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
      className="col-span-8 font-in 
      prose prose-lg max-w-max 
      prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
      prose-blockquote:bg-accent/20  prose-blockquote:border-accent prose-li:marker:text-accent
      dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark"
    >
      <MDXContent components={mdxComponent} />
    </div>
  );
};

export default RenderMdx;
