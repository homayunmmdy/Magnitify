import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from ".";
import { Button } from "@/components";
import Image from "next/image";

//@ts-ignore
const PostTable = ({ post }) => {
  return (
    <tr key={post.id}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <Image src={post.imgurl} width={48} height={48} alt={post.title} className="bg-gray-600"/>
            </div>
          </div>
          <div>
            <div className="font-normal md:font-bold">{post.title.slice(0,60)}</div>
          </div>
        </div>
      </td>
      <td className="hidden lg:block">{post.description.slice(0,60)}</td>
      <td>
        <Link href={`/admin/post/${post._id}`}>
          <Button title={<CiEdit size={25} />} color="btn-warning" style="me-2 mb-2"/>
        </Link>
      </td>
      <th>
        <DeleteBlock path="posts" id={post._id} />
      </th>
    </tr>
  );
};

export default PostTable;