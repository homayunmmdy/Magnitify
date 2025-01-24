import { CgFeed } from "react-icons/cg";
import { FaTimeline } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TbNewSection } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { VscGraphScatter } from "react-icons/vsc";

export const adminPages = [
  { name: "Admin", href: "/admin", icon: TiHome },
  { name: "Posts", href: "/admin/posts", icon: CgFeed },
  { name: "New Post", href: "/admin/posts/new", icon: MdOutlinePostAdd },
  { name: "Text Adv", href: "/admin/textadv", icon: RiAdvertisementLine },
  { name: "Services", href: "/admin/services", icon: SiCloudflarepages },
  { name: "Sections", href: "/admin/sections", icon: TbNewSection },
  { name: "Emails", href: "/admin/emails", icon: MdOutlineMail },
  { name: "Contacts", href: "/admin/contacts", icon: PiPhoneCallFill },
];
