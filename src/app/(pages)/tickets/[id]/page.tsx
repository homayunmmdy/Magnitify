import { TICKETS_API_URL } from "@/etc/config/apiConstants";
import TicketForm from "../components/TicketForm";

//@ts-ignore
const getTicketById = async (id) => {
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}${TICKETS_API_URL}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

let updateTicketData = {};
{/* @ts-ignore */}
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
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
