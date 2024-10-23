import { POST_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditPostForm } from "../../components";

let updateTicketData = {};
{/* @ts-ignore */}
const SinglePostsPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getById(POST_API_URL,params.id);
    {/* @ts-ignore */}
    updateTicketData = updateTicketData.document;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditPostForm post={updateTicketData} />;
};

export default SinglePostsPage;