import Tag from "@/src/components/Elements/Tag";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-black">
        <div className="absolute w-full z-10 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            link={`/categories/${post?.tags[0]}`}
            name={post?.tags[0]}
            className="px-6 py-2 text-sm"
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-white text-5xl leading-normal relative w-5/6">
            {post?.title}
          </h1>
        </div>

        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-black/60" />
        <Image
          src={post!.image.filePath.replace("../public", "")}
          alt={post!.title}
          placeholder="blur"
          blurDataURL={post?.image.blurhashDataUrl}
          width={post?.image.width}
          height={post?.image.height}
          className="aspect-square w-full h-full object-center object-cover"
        />
      </div>
    </article>
  );
}
