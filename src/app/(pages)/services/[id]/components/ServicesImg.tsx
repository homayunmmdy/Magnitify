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
        <div
          className="hero mb-5 aspect-video rounded-xl bg-indigo-600"
          key={service._id}
          style={{
            backgroundImage: `url(${
              !service?.imgurl ? "/static/Image/logo.jpg" : service?.imgurl
            })`,
          }}
        >
          <div className="hero-overlay rounded-xl bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{service?.name}</h1>
              <p className="mb-5">{service?.description.slice(0, 90)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesImg;
