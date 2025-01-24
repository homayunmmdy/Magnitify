import React from 'react'
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const FooterMedia: React.FC = () => {
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
          title="dev community"
          href="https://dev.to/homayunmmdy"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
        >
          <FaDev size={20} color="6A3FEA" />
        </Link>
        <Link
          title="Linkedin"
          href="www.linkedin.com/in/homayunmmdy"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
        >
          <FaLinkedinIn size={20} color="6A3FEA" />
        </Link>
      </div>
    </>
  );
};

export default FooterMedia;
