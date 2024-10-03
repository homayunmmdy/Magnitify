import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import FormattedTimestamp from "./FormattedTimestamp";
import ProgressDisplay from "./ProgressDisplay";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";
import { Button } from "@/components";
import { DeleteBlock } from "@/app/(pages)/admin/components/elements";
// @ts-ignore
const TicketCard = ({ ticket, master }) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return (
    <div className="card flex flex-col hover:bg-card-hover bg-card rounded-md shadow-xl p-5 m-2 h-full">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        {master ? (
          <div className="ml-auto">
            <DeleteBlock path="tickets" id={ticket._id} />
            <Link
              href={`/tickets/${ticket._id}`}
              style={{ display: "contents" }}
            >
              <Button title={<FaEdit />} color="btn-warning" type="button" />
            </Link>
          </div>
        ) : null}
      </div>
      <div>
        <h4 className="mb-1 font-bold">{ticket.title}</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">
              <FormattedTimestamp
                timestamp={ticket.createdAt}
                options={options}
              />
            </p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketCard;