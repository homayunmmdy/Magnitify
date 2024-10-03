"use client";
import { Button, Spinner } from "@/components";
import { TEXTADV_API_URL } from "@/etc/config/apiConstants";
import { ALL_TEXTADV_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from "../components/elements";

const AdminTextAdvPage: React.FC = () => {
  const { data: sections, loading } = useFetch(
    ALL_TEXTADV_QUERY_KEY,
    TEXTADV_API_URL
  );
  if (loading) {
    return <Spinner />;
  }
  {
    /* @ts-ignore */
  }
  const sortedData = sections
    ? [...sections].sort((a, b) => a.textadvid - b.textadvid)
    : [];

  return (
    <>
      <div className="overflow-x-auto">
        <div className="w-full flex justify-center">
          <Link href={`/admin/textadv/new`}>
            <Button
              title="New textadv"
              color="btn-primary"
              style="btn-outline m-3"
            />
          </Link>
        </div>
        <table className="table table-zebra my-2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th className="hidden lg:block">Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((item) => (
              <>
                {/* @ts-ignore */}
                <tr key={item.id}>
                  {/* @ts-ignore */}
                  <td>{item.textadvid}</td>
                  {/* @ts-ignore */}
                  <td>{item.advname}</td>
                  {/* @ts-ignore */}
                  <td>{item.body}</td>
                  <td>
                    {/* @ts-ignore */}
                    <Link href={`/admin/textadv/${item._id}`}>
                      <Button
                        title={<CiEdit size={25} />}
                        color="btn-warning"
                        style="me-2 mb-2"
                      />
                    </Link>
                  </td>
                  <td>
                    {/* @ts-ignore */}
                    <DeleteBlock path="textadv" id={item._id} />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminTextAdvPage;
