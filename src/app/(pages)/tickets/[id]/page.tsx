import { TICKETS_API_URL } from "@/etc/config/apiConstants";
import TicketForm from "../components/TicketForm";
import { getById } from "@/util/getById";

let updateTicketData = {};
{/* @ts-ignore */}
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(TICKETS_API_URL,params.id);
    {/* @ts-ignore */}
    updateTicketData = updateTicketData.document;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
