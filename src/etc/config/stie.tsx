const API_URL = process.env.API_URL;
const SiteConfig = {
  name: "مگنتی فای",
  title:
    " مگنتی فای بر هوش مصنوعی، ثروت و خودسازی مسلط شوید تا قدرت های فوق العاده خود را باز کنید",
  description:
    "مگنتی فای مقالات پیشرفته ای در مورد هوش مصنوعی، خودسازی، کسب و کار و ثروت ارائه می دهد. خود را با دانش توانمند کنید و به یک نیروی مافوق بشری تبدیل شوید",
  keywords: "مگنتی فای , کسب و کار , هوش مصنوعی , خودسازی , ثروت , پول",
  authors: [{ name: " تیم مگنتی فای", url: API_URL }],
  siteURL: `${API_URL}`,
  lang: "fa",
  dir: "rtl",
  // media
  email: "homayoun763@gmail.com",
  github: "https://github.com/homayunmmdy",
  phoneNumber: "0922 4003 487",
  linkedin: "https://www.linkedin.com/in/homayunmmdy/",
  robots: "index , follow",
  author: " تیم مگنتی فای",
  authorID: "magnitify_Team",
  // Navbar
  nav: [
    {
      id: 1,
      name: "خانه",
      link: "/",
    },
    {
      id: 2,
      name: "هوش مصنوعی",
      link: "/services/1",
    },
    {
      id: 3,
      name: "کسب و کار",
      link: "/services/3",
    },
    {
      id: 4,
      name: "بیوگرافی",
      link: "/services/3",
    },
    {
      id: 5,
      name: "پست های بیشتر",
      link: "/services/3",
    },
    {
      id: 6,
      name: "تماس باما",
      link: "/contacts",
    },
  ],
};

export default SiteConfig;

import {
  MdAdminPanelSettings,
  MdLocalPhone,
  MdOutlineFeed,
  MdOutlineMail,
  MdOutlinePostAdd,
} from "react-icons/md";
import { RiAdvertisementLine, RiTicketLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";

export const adminPages = [
  { name: "ادمین", href: "/admin", icon: MdAdminPanelSettings },
  { name: "پست ها", href: "/admin/posts", icon: MdOutlineFeed },
  { name: "پست جدید", href: "/admin/posts/new", icon: MdOutlinePostAdd },
  { name: "تبلیغات متنی", href: "/admin/textadv", icon: RiAdvertisementLine },
  { name: "سرویس ها", href: "/admin/services", icon: SiCloudflarepages },
  { name: "قسمت ها", href: "/admin/sections", icon: TbNewSection },
  { name: "ایمیل", href: "/admin/emails", icon: MdOutlineMail },
  { name: "تیکت", href: "/admin/tickets", icon: RiTicketLine },
  { name: "تماس باما", href: "/admin/contacts", icon: MdLocalPhone },
];
