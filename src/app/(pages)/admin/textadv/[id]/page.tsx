import { TEXTADV_API_URL } from "@/etc/config/apiConstants";
import EditTextAdvForm from "../../components/elements/EditTextAdvForm";

{/* @ts-ignore */}
const getTextAdvById = async (id) => {
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}${TEXTADV_API_URL}/${id}`, {
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
let updatetextadvData = {};
{/* @ts-ignore */}
const EditSectionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatetextadvData = await getTextAdvById(params.id);
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
