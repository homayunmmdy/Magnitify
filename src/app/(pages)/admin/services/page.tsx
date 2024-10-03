"use client";
import { Spinner } from "@/components";
import { SERVICES_API_URL } from "@/etc/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { DataTable } from "../components/elements";

const Services = () => {
  const { data: services, loading } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <DataTable editor={true} data={services} path="services" />
    </>
  );
};

export default Services;
