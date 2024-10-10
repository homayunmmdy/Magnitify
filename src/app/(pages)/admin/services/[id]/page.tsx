import { SERVICES_API_URL } from "@/etc/config/apiConstants";
import EditServicesForm from "../../components/elements/EditServicesForm";
import { getById } from "@/util/getById";

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
