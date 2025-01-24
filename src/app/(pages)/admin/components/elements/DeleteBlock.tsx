"use client";
import { Button } from "@/components";
import { checkMaster } from "@/util/Util";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  path: string;
  id: string | number;
  masterEditor?: boolean;
}

const DeleteBlock: React.FC<Props> = ({ path, id, masterEditor }: Props) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const router = useRouter();

  // Handle modal auto close after a specific time (e.g., 10 seconds)
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isConfirmOpen) {
      timer = setTimeout(() => {
        setIsConfirmOpen(false);
      }, 10000999); // Change this duration as needed
    }
    return () => clearTimeout(timer);
  }, [isConfirmOpen]);
  let isMaster = checkMaster();

  const handleDelete = async () => {
    if (masterEditor && !isMaster) {
      toast.error("You can not delete masterEditor content");
      setIsConfirmOpen(false);
      return;
    } else {
      try {
        const res = await fetch(`/api/${path}/${id}`, {
          method: "DELETE",
        });
        setIsConfirmOpen(false);
        if (res.ok) {
          toast.success('Item Deleted successfully')
          router.refresh();
        } else {
          toast.error("Something went wrong try one more time please");
          console.error("Error deleting item:", res.statusText);
        }
      } catch (error) {
        toast.error("Something went wrong try one more time please");
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <>
      <Toaster />
      <Button
        color="btn-error"
        className="mb-2 me-2"
        type="button"
        onClick={() => setIsConfirmOpen(true)}
      >
        <MdDeleteOutline />
      </Button>

      {isConfirmOpen && (
        <div className="fixed inset-0 z-10 mt-[120px] overflow-y-auto p-4 md:p-8">
          <div className="mx-auto w-full max-w-sm rounded-lg border border-indigo-700 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b p-5">
              <h5 className="text-xl font-medium">Delete</h5>
              <Button
                color="btn-error"
                type="button"
                onClick={() => setIsConfirmOpen(false)}
              >
                <IoMdClose />
              </Button>
            </div>
            <div className="p-3">
              Are you sure you want to delete this item?
            </div>
            <div className="flex items-center justify-end p-3">
              <Button
                type="button"
                color="btn-primary"
                className="mr-2"
                onClick={() => setIsConfirmOpen(false)}
              >
                Cancel
              </Button>
              <Button type="button" color="btn-error" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlock;
