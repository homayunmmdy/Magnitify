import { TEXTADV_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditTextAdvForm } from "../../components";
import { FetchDataForEditPage } from "@/util/ServerUtil";

const EditAdminTextAdv = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const updateData = await FetchDataForEditPage(TEXTADV_API_URL, params.id);

  return <EditTextAdvForm data={updateData} />;
};

export default EditAdminTextAdv;
