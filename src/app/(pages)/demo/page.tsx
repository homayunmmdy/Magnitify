import { Banner } from "@/components";
import { LinearAds } from "@/components/ads";
import {
  CodingTabs,
  MainSec,
  PostsSec,
  SingleCardSec,
  SliderSec,
  VerticalPostsSec,
} from "@/components/sections";
import SiteConfig from "@/config/site";
import { Metadata } from "next";
import React from "react";
import ServicesNav from "./components/ServicesNav";

export const metadata: Metadata = {
  title: `demo page | ${SiteConfig.title}`,
  description:
    "Here you find the latest posts about varities topics like football coding news and life and more",
  keywords: "posts,football,news,life,coding,interview_question,QA",
  alternates: {
    canonical: `${SiteConfig.siteURL}/demo`,
  },
  openGraph: {
    title: `demo page | ${SiteConfig.title}`,
    description:
      "Here you find the latest posts about varities topics like football coding news and life and more",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Here you find the latest posts about varities topics like football coding news and life and more",
  },
};

const DemoPage: React.FC = () => {
  return (
    <>
      <h1 className="hidden">{`demo page | ${SiteConfig.title}`}</h1>
      <ServicesNav />
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
        <MainSec />
        <Banner />
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <PostsSec />
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds id={1} />
          </div>
        </div>
      </div>
      <div className="bg-indigo-600 p-3 sm:p-4 md:p-6 lg:p-9">
        <div className="mt-5' mx-auto w-[94%] md:w-[92%]">
          <SliderSec />
        </div>
      </div>
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
        <SingleCardSec />
        <VerticalPostsSec />
        <CodingTabs />
      </div>
    </>
  );
};

export default DemoPage;
