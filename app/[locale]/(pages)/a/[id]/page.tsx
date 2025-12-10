import Header from "@/app/components/Header";
import Sidebar from "@/app/components/templates/MainPage/Sidebar";
import EditPostForm from "@/app/components/templates/PostEditor/EditPostForm";
import { FetchDataForEditPage } from "@/app/util/ServerUtil";

type SinglePageParamsType = {
  id: string;
};
const EditAdminPosts = async ({ params }: { params: SinglePageParamsType }) => {
  const updateData = await FetchDataForEditPage("/api/posts", params.id);

  console.log(params.id);
  console.log(updateData);
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-2/6"></div>
        <div className="w-4/6">
          <EditPostForm post={updateData} />
        </div>
        <div className="w-2/6">
          <Sidebar />
        </div>
      </div>
    </>
  );
  // return <EditPostForm />;
};

export default EditAdminPosts;
