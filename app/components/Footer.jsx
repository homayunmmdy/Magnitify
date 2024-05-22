import React from "react";
import SiteConfig from "@/app/config/site";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10  text-base-content">
        <nav className="items-center">
          <h6 className="footer-title">Social Media</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href='www.linkedin.com/in/homayunmmdy'><FaLinkedinIn size={24} className="fill-current hover:text-indigo-700" /></Link>
            <Link href='https://youtube.com/@thehomayunmmdy'><IoLogoYoutube size={24} className="fill-current hover:text-indigo-700" /></Link>
            <Link href="https://github.com/homayunmmdy"><FaGithub size={24} className="fill-current hover:text-indigo-700" /></Link>
          </div>
          <p>Copy right © {new Date().getFullYear()} - <Link href="/" className="hover:text-indigo-700" title={SiteConfig.name}>{SiteConfig.name}</Link></p>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          {SiteConfig.nav.map((item) => {
            return (
              <Link href={item.link} key={item.id} className="link link-hover hover:text-indigo-700">{item.name}</Link>
            )
          })}
        </nav>
        <nav>
          <h6 className="footer-title">Resourses</h6>
          <Link href="https://api.whatsapp.com/send?phone=09224003487" className="link link-hover hover:text-indigo-700">Support</Link>
          <Link href="https://nexca.vercel.app/" className="link link-hover hover:text-indigo-700">Tickets</Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
