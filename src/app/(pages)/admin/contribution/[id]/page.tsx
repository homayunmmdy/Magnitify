import { CONTRIBUTION_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditContributionForm } from "../../components";

let updateTicketData = {};
{/* @ts-ignore */}
const SingleContributionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(CONTRIBUTION_API_URL,params.id);
    {/* @ts-ignore */}
    updateTicketData = updateTicketData.document;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditContributionForm contribute={updateTicketData} />;
};

export default SingleContributionPage;
