import { SERVICES_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditServicesForm } from "../../components";
import { FetchDataForEditPage } from "@/util/ServerUtil";

const EditAdminServices = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const updateData = await FetchDataForEditPage(SERVICES_API_URL, params.id);

  return <EditServicesForm data={updateData} />;
};

export default EditAdminServices;
