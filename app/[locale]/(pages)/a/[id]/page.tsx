import EditPostForm from "@/app/components/templates/PostEditor/EditPostForm";
import { FetchDataForEditPage } from "@/app/util/ServerUtil";

type SinglePageParamsType = {
  id: string;
};
const EditAdminPosts = async ({ params }: { params: SinglePageParamsType }) => {
  const updateData = await FetchDataForEditPage("/api/posts", params.id);

  return <EditPostForm post={updateData} />;
};

export default EditAdminPosts;
