import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/templates/MainPage/Sidebar";
import React from "react";

const AdminPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <Header />
      <div className="flex">
        <div className="w-1/6"></div>
        <div className="w-4/6">{children}</div>
        <div className="w-1/6">
          <Sidebar />
        </div>
      </div>
    </Container>
  );
};

export default AdminPageLayout;
