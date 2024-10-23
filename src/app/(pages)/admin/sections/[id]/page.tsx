import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditSectionForm } from "../../components";

let updatesectionData = {};
{/* @ts-ignore */}
const EditSectionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatesectionData = await getById(SECTIONS_API_URL,params.id);
    {/* @ts-ignore */}
    updatesectionData = updatesectionData.document;
  } else {
    updatesectionData = {
      _id: "new",
    };
  }
  return <EditSectionForm data={updatesectionData} />;
};

export default EditSectionPage;
