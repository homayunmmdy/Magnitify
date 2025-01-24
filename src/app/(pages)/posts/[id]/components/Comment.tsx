"use client";
import { DeleteBlock } from "@/app/(pages)/admin/components/elements";
import { checkMaster } from "@/util/Util";
import { FaRegComment } from "react-icons/fa6";

interface Props {
  _id: string;
  name: string;
  email: string;
  message: string;
}

const Comment = ({ comment }: { comment: Props }) => {
  let master = checkMaster();

  return (
    <>
      <section className="my-5 rounded-xl bg-gray-100 p-6">
        <header className="flex gap-4">
          <span className="font-bold">{comment.name}</span>
          <span>{comment.email}</span>
        </header>
        <p className="flex gap-3 pt-2">
          <FaRegComment
            color="#6366F1"
            size={32}
            className="rounded-full bg-white p-2"
          />{" "}
          {comment.message}
          {master && <DeleteBlock path="comments" id={comment._id} />}
        </p>
      </section>
    </>
  );
};

export default Comment;
