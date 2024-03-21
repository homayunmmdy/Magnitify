import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import DeleteBlock from "../../home/DeleteBlock";
const PostTable = ({ ticket }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={ticket.imgurl} alt={ticket.title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{ticket.title}</div>
            </div>
          </div>
        </td>
        <td>{ticket.description}</td>
        <td>
          <Link href={`/admin/post/${ticket._id}`}>
            <CiEdit size={25} />
          </Link>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">
            <DeleteBlock id={ticket._id} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default PostTable;
