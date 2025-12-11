import EditPostForm from "@/app/components/templates/PostEditor/EditPostForm";
import { FetchDataForEditPage } from "@/app/util/ServerUtil";

const EditAdminPosts = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const updateData = await FetchDataForEditPage("/api/posts", id);

  return <EditPostForm post={updateData} />;
};

export default EditAdminPosts;
