"use client";
import {
  CONTACTS_API_URL,
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/config/apiConstants";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgFeed } from "react-icons/cg";
import { FiServer } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { RxSection } from "react-icons/rx";
import Stat from "./Stat";
import useGetStats from "@/hooks/useGetStats";

const Stats = () => {
  const data = useGetStats();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Link href="/admin/posts">
        <Stat
          title="Available Posts"
          number={data.posts.length}
          icon={<CgFeed />}
        />
      </Link>
      <Link href="/admin/sections">
        <Stat
          title="Available Sections"
          number={data.sections.length}
          icon={<RxSection />}
        />
      </Link>
      <Link href="/admin/services">
        <Stat
          title="Available Services"
          number={data.services.length}
          icon={<FiServer />}
        />
      </Link>
      <Link href="/admin/contacts">
        <Stat
          title="Messages"
          number={data.contacts.length}
          icon={<LuMessagesSquare />}
        />
      </Link>
    </div>
  );
};

export default Stats;
