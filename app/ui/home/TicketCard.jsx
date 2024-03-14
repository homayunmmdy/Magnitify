import Link from "next/link";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("fa-IR", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="flex flex-col border border-gray-400 rounded-md shadow-lg p-3 m-2">
      <Link href={`/Tickets/${ticket._id}`} style={{ display: "contents" }}>
      <img src={ticket.imgurl} alt={ticket.title} className="object-cover object-center w-full h-48" />

        <h4 className="mb-1">{ticket.title}</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">{ticket.description}</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">{createdDateTime}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
