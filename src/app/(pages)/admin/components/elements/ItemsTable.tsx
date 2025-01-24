import { Button } from "@/components";
import { PostsCashType } from "@/types/CashTypes";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from ".";

interface Props {
  post: PostsCashType;
  baseURL: string;
}
const ItemsTable = ({ post, baseURL }: Props) => {
  return (
    <tr key={post._id}>
      <td>
        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
          <div className="avatar">
            <Link
              href={`/posts/${post._id}`}
              className="mask mask-squircle h-32 w-32"
            >
              <Image
                src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
                width={300}
                height={300}
                alt={post.title}
                className="bg-gray-600"
              />
            </Link>
          </div>
          <div>
            <div className="font-normal md:font-bold">
              {post.title.slice(0, 60)}
            </div>
          </div>
        </div>
      </td>
      <td>
        <Link href={`/admin/${baseURL}/${post._id}`}>
          <Button color="btn-warning" className="mb-2 me-2">
            <CiEdit size={25} />
          </Button>
        </Link>
      </td>
      <th>
        <DeleteBlock path={baseURL} id={post._id} masterEditor={post.masterEditor} />
      </th>
    </tr>
  );
};

export default ItemsTable;
