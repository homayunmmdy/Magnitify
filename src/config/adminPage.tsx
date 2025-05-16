import { CgFeed } from "react-icons/cg";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TiHome } from "react-icons/ti";

export const adminPages = [
  { name: "پست ها", href: "/admin", icon: CgFeed },
  { name: "پست جدید", href: "/admin/posts/new", icon: MdOutlinePostAdd },
  { name: "سرویس ها", href: "/admin/services", icon: SiCloudflarepages },
];
