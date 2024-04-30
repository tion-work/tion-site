import Categories from "@/src/components/Category/Categories";
import PostLayoutThree from "@/src/components/Post/PostLayoutThree";
import { allPosts } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = new Array<string>();
  const paths = [{ slug: "all" }];

  allPosts.map((post) => {
    if (post.isPublished) {
      post.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const allCategories = ["all"]; // Initialize with 'all' category
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });
  allCategories.sort();

  const posts = allPosts.filter((post) => {
    if (params.slug === "all") {
      return true; // Include all posts if 'all' category is selected
    }
    return post.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="mt-12 flex flex-col text-black dark:text-white">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {posts.map((post, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <PostLayoutThree post={post} />
          </article>
        ))}
      </div>
    </article>
  );
}
