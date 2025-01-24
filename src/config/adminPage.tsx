import { CgFeed } from "react-icons/cg";
import { MdOutlineMail, MdOutlinePostAdd } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiCloudflarepages } from "react-icons/si";
import { TiHome } from "react-icons/ti";

export const adminPages = [
  { name: "ادمین", href: "/admin", icon: TiHome },
  { name: "پست ها", href: "/admin/posts", icon: CgFeed },
  { name: "پست جدید", href: "/admin/posts/new", icon: MdOutlinePostAdd },
  { name: "تبلیغات", href: "/admin/textadv", icon: RiAdvertisementLine },
  { name: "سرویس ها", href: "/admin/services", icon: SiCloudflarepages },
  { name: "ایمیل ها", href: "/admin/emails", icon: MdOutlineMail },
  { name: "تماس باما", href: "/admin/contacts", icon: PiPhoneCallFill },
];
