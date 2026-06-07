import { getLatestPostSummaries } from "@/app/util/maxUtil";
import Link from "next/link";

const BlogIndexPage = async () => {
  const posts = await getLatestPostSummaries();

  return (
    <div className="px-5 w-[98%] md:w-[92%] mx-auto py-12">
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={`/en/blogs/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndexPage;
