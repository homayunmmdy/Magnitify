import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { EditSectionForm } from "../../components/elements";
{/* @ts-ignore */}
const getSectionById = async (id) => {
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}${SECTIONS_API_URL}/${id}`, {
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
let updatesectionData = {};
{/* @ts-ignore */}
const EditSectionPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatesectionData = await getSectionById(params.id);
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
