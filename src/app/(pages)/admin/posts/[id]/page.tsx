import { POST_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditPostForm } from "../../components";
import { FetchDataForEditPage } from "@/util/ServerUtil";

const EditAdminPosts = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const updateData = await FetchDataForEditPage(POST_API_URL, params.id);

  return <EditPostForm post={updateData} />;
};

export default EditAdminPosts;
