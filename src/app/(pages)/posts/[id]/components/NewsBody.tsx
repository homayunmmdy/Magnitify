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
      <div
        className="prose mb-3 max-w-none text-lg leading-9"
        id="tiptap-style"
        dangerouslySetInnerHTML={{ __html: PostBody }}
      />
      {post.source && (
        <p>
          منبع : <span className="font-bold">{post.source}</span>
        </p>
      )}
      <SharePost
        title={post.title}
        description={post.description}
        POSTURL={`/posts/${post._id}`}
      />
      
    
      {comments?.length > 0 && (
        <div className="my-5 rounded-xl border-2 border-amber-600 p-5">
          <Titr
            // resetStyle={true}
            // style="bg-green-400 text-center p-5 flex justify-center items-center rounded-xl mb-5 font-bold text-xl text-white"
            title="نظرات"
            item="text-right"
          />

          {comments?.map((comment: CommentsCashType) => (
            <Comment comment={comment} key={comment._id} />
          ))}
        </div>
      )}
        <Form
        buttonText="ارسال نظر"
        initalData={initalData}
        API={COMMENTS_API_URL}
      />
    </>
  );
};

export default NewsBody;
