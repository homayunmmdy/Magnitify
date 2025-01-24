import { FooterLinkType } from "@/types/entities";
import Link from "next/link";

const FooterLink = ({ link }: { link: FooterLinkType }) => {
  return (
    <Link
      className="link-hover link flex items-center gap-2 hover:text-indigo-700"
      href={link.href}
      title={link.title}
    >
      {link.icon}
      {link.title}
    </Link>
  );
};

export default FooterLink;
