"use client";
import { Spinner } from "@/components";
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { SECTIONS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { checkMaster } from "@/util/checkMaster";
import React from "react";
import { DataTable } from "../components/elements";

const AdminSectionPage: React.FC = () => {
  const { data: sections, loading } = useFetch(
    SECTIONS_QUERY_KEY,
    SECTIONS_API_URL
  );
  if (loading) {
    return <Spinner />;
  }

  let master = checkMaster();

  return (
    <>
      <DataTable editor={master} data={sections} path="sections" />
    </>
  );
};

export default AdminSectionPage;
