"use client";

import { MdDeleteOutline } from "react-icons/md";

const DeleteBlock3 = ({ id }) => {

  const deleteTicket = async () => {
    const res = await fetch(`/api/Newsletter/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <MdDeleteOutline 
    className=" text-red-400 hover:cursor-pointer hover:text-red-200"
    size={25}
    onClick={deleteTicket}
    />

  );
};

export default DeleteBlock3;
