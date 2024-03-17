"use client";

import { MdDeleteOutline } from "react-icons/md";

const DeleteBlock2 = ({ id }) => {

  const deleteTicket = async () => {
    const res = await fetch(`/api/Contacts/${id}`, {
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

export default DeleteBlock2;
