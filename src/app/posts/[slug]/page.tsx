import Tag from "@/src/components/Elements/Tag";
import PostDetails from "@/src/components/Post/PostDetails";
import RenderMdx from "@/src/components/Post/RenderMdx";
import { siteMetadata } from "@/src/utils/siteMetaData";
import { allPosts } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { describe } from "node:test";

interface Heading {
  level: string;
  text: string;
  slug?: string;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.publishedAt).toISOString();
  const updatedAt = new Date(post.updatedAt || post.publishedAt).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (post.image) {
    imageList = [
      siteMetadata.siteUrl + post.image.filePath.replace("../public", ""),
    ];
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = post?.author ? [post.author] : siteMetadata.author;
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: siteMetadata.siteUrl + post.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      images: [ogImages],
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      // siteId: "1467726470533754880",
      // creator: "@nextjs",
      // creatorId: "1467726470533754880",
      images: ogImages, // Must be an absolute URL
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    return;
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="absolute w-full z-10 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            link={`/categories/${slug(post.tags[0])}`}
            name={post.tags[0]}
            className="px-6 py-2 text-sm"
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
            {post?.title}
          </h1>
        </div>

        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={post.image.filePath.replace("../public", "")}
          alt={post.title}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          width={post.image.width}
          height={post.image.height}
          className="aspect-square w-full h-full object-center object-cover"
        />
      </div>

      <PostDetails post={post} slug={params.slug} />

      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {post.toc.map((heading: Heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark dark:bg-light mr-2">
                          &nbsp;
                        </span>
                      ) : null}

                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx post={post} />
      </div>
    </article>
  );
}
