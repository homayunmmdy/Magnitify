import React from 'react'
import {  FooterLinkType } from "@/types/entities";
import { AiFillHome } from "react-icons/ai";
import { FaTimeline } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { LiaQuestionSolid } from "react-icons/lia";
import { MdPrivacyTip } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import {  VscGraphScatter } from "react-icons/vsc";


export const FooterLinkData: FooterLinkType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    title: "FAQs",
    href: "/FAQs",
    icon: <LiaQuestionSolid />,
  },
  {
    id: 3,
    title: "privacy_policy",
    href: "/privacy_policy",
    icon: <MdPrivacyTip />,
  },
  {
    id: 4,
    title: "New Ticket",
    href: "/tickets/new",
    icon: <GiTicket />,
  },
  {
    id: 5,
    title: "Contributions",
    href: "/contribution",
    icon: <VscGraphScatter />,
  },
  {
    id: 6,
    title: "About",
    href: "/about",
    icon: <SiAboutdotme />,
  },
  {
    id: 7,
    title: "Contacts",
    href: "/contacts",
    icon: <PiPhoneCallFill />,
  },
  {
    id: 8,
    title: "Time",
    href: "/time",
    icon: <FaTimeline />,
  },
];
