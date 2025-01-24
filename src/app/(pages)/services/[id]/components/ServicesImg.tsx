"use client";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_IMG_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import { getParameterId } from "@/util/Util";
import React from "react";

const ServicesImg: React.FC = () => {
  const id = getParameterId(10);
  const { data: services, loading } = useFetch(
    SERVICES_IMG_KEY,
    SERVICES_API_URL
  );
  const filteredData = services?.filter(
    (item: ServicesCashType) => item.secid == parseInt(id)
  );

  if (loading) {
    return <div className="hero skeleton mb-5 rounded-xl"></div>;
  }
  return (
    <>
      {filteredData?.map((service: ServicesCashType) => (
        <div>
          <h1 className="mb-2 border-b-2 border-amber-600 py-2 text-center font-bold">{service.name}</h1>
          <p className="font-medium">{service.description.slice(0,350)}</p>
        </div>
      ))}
    </>
  );
};

export default ServicesImg;
