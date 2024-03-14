import AdminSidbar from "../ui/admin/Sidebar";

export default function AdminLayout({
    children,
  }) {
    return (
        <div>
        <div className="flex h-full w-full">
          <AdminSidbar />
          <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
            <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:mr-[403px]">
              <div className="h-full">
                {children}
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
  }