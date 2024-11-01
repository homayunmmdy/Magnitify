import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { LuGithub } from "react-icons/lu";

const FooterMedia = () => {
  return (
    <>
      <div className="flex gap-3 sm:justify-center">
        <Link
          title="Github"
          href="https://github.com/homayunmmdy"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
        >
          <LuGithub size={20} color="6A3FEA" />
        </Link>
        <Link
          title="Instagram"
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
        >
          <FaInstagram size={20} color="6A3FEA" />
        </Link>
        <Link
          title="Linkedin"
          href="www.linkedin.com/in/homayunmmdy"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
        >
          <FaLinkedinIn size={20} color="6A3FEA" />
        </Link>
        <Link
          title="Youtube"
          href="https://youtube.com/@thehomayunmmdy"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
        >
          <IoLogoYoutube size={20} color="6A3FEA" />
        </Link>
      </div>
    </>
  );
};

export default FooterMedia;
