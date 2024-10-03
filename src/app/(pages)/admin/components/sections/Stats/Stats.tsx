"use client";
import {
  CONTACTS_API_URL,
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/etc/config/apiConstants";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgFeed } from "react-icons/cg";
import { FiServer } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { RxSection } from "react-icons/rx";
import Stat from "./Stat";

const Stats = () => {
  const [posts, setPosts] = useState([]);
  const [sections, setSections] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          postsResponse,
          sectionsResponse,
          contactsResponse,
          serviceResponse,
        ] = await Promise.all([
          axios.get(`${POST_API_URL}`),
          axios.get(`${SECTIONS_API_URL}`),
          axios.get(`${CONTACTS_API_URL}`),
          axios.get(`${SERVICES_API_URL}`),
        ]);

        setPosts(postsResponse.data.data);
        setSections(sectionsResponse.data.data);
        setContacts(contactsResponse.data.data);
        setService(serviceResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link href="/admin/posts">
        <Stat title="Available Posts" number={posts.length} icon={<CgFeed />} />
      </Link>
      <Link href="/admin/sections">
        <Stat
          title="Available Sections"
          number={sections.length}
          icon={<RxSection />}
        />
      </Link>
      <Link href="/admin/services">
        <Stat
          title="Available Services"
          number={service.length}
          icon={<FiServer />}
        />
      </Link>
      <Link href="/admin/contacts">
        <Stat
          title="Messages"
          number={contacts.length}
          icon={<LuMessagesSquare />}
        />
      </Link>
    </div>
  );
};

export default Stats;
