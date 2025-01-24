import "@/app/tiptap.css";
import { Form, Titr } from "@/components";
import NexcaMark from "@/components/NexcaMark";
import { MorePostsSec } from "@/components/sections";
import { COMMENTS_API_URL } from "@/config/apiConstants";
import { COMMENTS_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { CommentsCashType } from "@/types/CashTypes";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import Comment from "./Comment";
import ReadPost from "./ReadPost";
import RenderTags from "./RenderTags";
import SharePost from "./SharePost";

const NewsBody = ({ post }: { post: any }) => {
  const text = `${post?.title}. ${post?.description}`;
  const PostBody = DOMPurify.sanitize(post.body);

  const initalData = {
    postId: post._id,
    name: "",
    email: "",
    message: "",
  };
  const { data } = useFetch(COMMENTS_KEY, COMMENTS_API_URL);
  const comments = data?.filter((item: any) => item.postId == post._id);
  return (
    <>
      <Image
        className="aspect-video w-full rounded-3xl py-3"
        src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
        title={post.title}
        alt={post.title}
        width={662.172}
        height={372.469}
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-3 px-3">
        {/* <p className="text-center">{readingTimeEstimate.text}</p> */}
        <ReadPost text={text} />
        <NexcaMark master={post.masterEditor} />
        <Link href="/demo" className="btn btn-outline btn-primary rounded-full">
          Back Home
        </Link>
      </div>
      <div
        className="prose mb-3 max-w-none text-lg leading-9"
        id="tiptap-style"
        dangerouslySetInnerHTML={{ __html: PostBody }}
      />
      {post.source && (
        <p>
          source : <span className="font-bold">{post.source}</span>
        </p>
      )}
      <SharePost title={post.title} description={post.description} POSTURL={`/posts/${post._id}`} />
      {post.categories?.length > 0 && (
        <div className="my-3 flex items-center gap-3">
          <span className="font-bold">Categories:</span>
          <RenderTags post={post} />
        </div>
      )}
      <Form
        buttonText="Comment"
        initalData={initalData}
        API={COMMENTS_API_URL}
      />
      {comments?.length > 0 && (
        <div className="my-5 rounded-xl bg-indigo-600 p-5 pt-10">
          <Titr
            resetStyle={true}
            style="bg-green-400 text-center p-5 flex justify-center items-center rounded-xl mb-5 font-bold text-xl text-white"
            title="Your comments"
            item="text-left"
          />

          {comments?.map((comment: CommentsCashType) => (
            <Comment comment={comment} key={comment._id} />
          ))}
        </div>
      )}
      <MorePostsSec />
    </>
  );
};

export default NewsBody;
