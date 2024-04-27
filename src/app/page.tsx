import { allPosts } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";

export default function Home() {
  console.log(allPosts)
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection posts={allPosts} />
    </main>
  );
}
