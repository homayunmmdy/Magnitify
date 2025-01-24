import FormatTime from "@/app/(pages)/posts/components/FormatTime";
import { PostsCashType } from "@/types/CashTypes";
import Link from "next/link";

const PostCard = ({ post }: { post: PostsCashType }) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return (
    <>
      <Link
        href={`/posts/${post._id}`}
        className="md:hover:scale-102 group flex py-10 transition-transform duration-500 ease-in-out"
      >
        <div className="w-[20%] px-5 pt-5">
          <FormatTime
            timestamp={post.createdAt}
            options={options as Intl.DateTimeFormatOptions}
          />
        </div>
        <section className="w-[80%]">
          <h2 className="font-2xl mb-3 font-bold group-hover:text-amber-700">{post.title.slice(0, 120)}</h2>
          <p>{post.description.slice(0, 300)}</p>
        </section>
      </Link>
    </>
  );
};

export default PostCard;
