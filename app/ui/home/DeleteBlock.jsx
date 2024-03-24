"use client";

import { MdDeleteOutline } from "react-icons/md";

const DeleteBlock = ({path, id }) => {
  const deleteTicket = async () => {
    const res = await fetch(`/api/${path}/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={deleteTicket}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <MdDeleteOutline />
      </button>
    </>
  );
};

export default DeleteBlock;
