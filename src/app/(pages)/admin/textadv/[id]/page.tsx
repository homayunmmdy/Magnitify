import { TEXTADV_API_URL } from "@/etc/config/apiConstants";
import EditTextAdvForm from "../../components/elements/EditTextAdvForm";
import { getById } from "@/util/getById";

let updatetextadvData = {};
{/* @ts-ignore */}
const EditSectionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatetextadvData = await getById(TEXTADV_API_URL,params.id);
    {/* @ts-ignore */}
    updatetextadvData = updatetextadvData.document;
  } else {
    updatetextadvData = {
      _id: "new",
    };
  }
  return <EditTextAdvForm data={updatetextadvData} />;
};

export default EditSectionPage;
