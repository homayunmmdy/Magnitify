// import AdminPostForm from "./components/AdminPostForm";
import AdminSidbar from "../ui/admin/Sidebar";
// import { Routes, Route } from "react-router-dom";
// import Breadcrumb from "./components/Breadcrumb";

const Admin = () => {
  return (
    <div style={{ backgroundColor: "rgb(244, 247, 254)" }}>
      <div className="flex h-full w-full">
        <AdminSidbar />
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[403px]">
            <div className="h-full">
              Admin
              {/* <Breadcrumb />
              <Routes>
                <Route path="/post" element={<AdminPostForm />} />
              </Routes> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;