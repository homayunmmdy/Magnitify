import { PUBLICARIONS_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditPublicationForm } from "../../components";

let updatesectionData = {};
{/* @ts-ignore */}
const EditSectionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatesectionData = await getById(PUBLICARIONS_API_URL,params.id);
    {/* @ts-ignore */}
    updatesectionData = updatesectionData.document;
  } else {
    updatesectionData = {
      _id: "new",
    };
  }
  return <EditPublicationForm data={updatesectionData} />;
};

export default EditSectionPage;
