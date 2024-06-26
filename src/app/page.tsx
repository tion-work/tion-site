import { allPosts } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {

  console.log(allPosts);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection posts={allPosts} />
      <FeaturedPosts posts={allPosts} />
      <RecentPosts posts={allPosts} />
    </main>
  );
}
