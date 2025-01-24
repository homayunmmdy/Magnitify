import { Button } from "@/components";
import { PostsCashType } from "@/types/CashTypes";
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
          <div>
            <p className="mb-2 md:font-bold">
              {post.title.slice(0, 90)}
            </p>
            <p className="font-medium">{post.description.slice(0, 120)}</p>
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
        <DeleteBlock
          path={baseURL}
          id={post._id}
          masterEditor={post.masterEditor}
        />
      </th>
    </tr>
  );
};

export default ItemsTable;
