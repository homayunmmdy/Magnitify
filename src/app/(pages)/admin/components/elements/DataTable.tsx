import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from ".";
import Link from "next/link";
import { Button } from "@/components";

//@ts-ignore
const DataTable = ({ data, path, editor }) => {
  // Sort data by `secid` in ascending order
  const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];

  return (
    <div className="overflow-x-auto">
      {editor ? (
        <div className="w-full flex justify-center">
          <Link href={`/admin/${path}/new`}>
            <Button
              title={`New ${path}`}
              color="btn-error"
              style="btn-outline m-3"
            />
          </Link>
        </div>
      ) : null}
      <table className="table table-zebra my-2">
        <thead>
          <tr>
            <th>id</th>
            <th>sec</th>
            <th>edit</th>
            {editor ? <th>delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((item) => (
            <tr key={item.id}>
              <td>{item.secid}</td>
              <td>{item.name}</td>
              <td>
                <Link href={`/admin/${path}/${item._id}`}>
                  <Button
                    title={<CiEdit size={25} />}
                    color="btn-warning"
                    style="me-2 mb-2"
                  />
                </Link>
              </td>
              {editor ? (
                <td>
                  <DeleteBlock path={path} id={item._id} />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
