import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import DeleteBlock from "../../home/DeleteBlock"
const AdminPost = ({ ticket }) => {
  return (
    <>
       <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full">
        <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        
          <div className="flex items-center">
            <div className="ml-5">
                 <img src={ticket.imgurl} alt={ticket.title}  className="h-[95px] w-[95px] rounded-lg " width="120"
            height="120"
            loading="lazy" />
            </div>
            <div className="ml-4">
              <p className="text-base font-medium text-navy-700 dark:text-white">
              {ticket.title} 
              </p>
              <p className="mt-2 text-sm text-gray-600">
              {ticket.description}
              </p>
            </div>
          </div>
          <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <Link href={`/admin/post/${ticket._id}`} >
          <CiEdit size={25}/>
          </Link>
          <DeleteBlock id={ticket._id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPost;
