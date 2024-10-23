import { SERVICES_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditServicesForm } from "../../components";

let updateservicesData = {};
{/* @ts-ignore */}
const EditServicesPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateservicesData = await getById(SERVICES_API_URL,params.id);
    {/* @ts-ignore */}
    updateservicesData = updateservicesData.document;
  } else {
    updateservicesData = {
      _id: "new",
    };
  }
  return <EditServicesForm data={updateservicesData} />;
};

export default EditServicesPage;
