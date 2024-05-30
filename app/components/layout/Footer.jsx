import React from "react";
import SiteConfig from "@/app/config/site";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import Logo from "@/public/static/Image/logo.png"
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
                        <div className="col-span-full xl:col-span-3 relative bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">

                            <Link href="/" className="flex justify-center lg:justify-start" title={SiteConfig.name}>
                                <div href="/" className="flex items-center gap-4 flex-nowrap" >
                                    <Image src={Logo} width={60} height={60} title={SiteConfig.name} alt={SiteConfig.altImgName} />
                                    <span className="text-2xl font-bold text-white">
                                        {SiteConfig.name}
                                    </span>
                                </div>
                            </Link>
                            <p className="text-center text-gray-200">{SiteConfig.description}</p>

                            <div className="flex  space-x-4 sm:justify-center  ">
                                <Link title="Github" href="https://github.com/homayunmmdy" className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md" ><LuGithub size={20} color="6A3FEA" /></Link>
                                <Link title="Instagram" href="#" className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md" ><FaInstagram size={20} color="6A3FEA" /></Link>
                                <Link title="Linkedin" href='www.linkedin.com/in/homayunmmdy' className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md" ><FaLinkedinIn size={20} color="6A3FEA" /></Link>
                                <Link title="Youtube" href='https://youtube.com/@thehomayunmmdy' className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md" ><IoLogoYoutube size={20} color="6A3FEA" /></Link>
                            </div>
                        </div>

                        <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
                            <h4 className="text-lg text-gray-900 font-bold mb-9">Get In Touch</h4>
                            <ul className="text-gray-900 transition-all duration-500 grid gap-6">
                                <li>homayoun763@gmail.com</li>
                                <li>+922 4003 487</li>
                            </ul>
                        </div>
                        <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
                            <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">Quick Links</h4>
                            <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                                    <li><Link className="link link-hover hover:text-indigo-700" href="/">Home</Link></li>
                                    <li><Link className="link link-hover hover:text-indigo-700" href="#">FAQs</Link></li>
                                    <li><Link className="link link-hover hover:text-indigo-700" href="#">Price Plan</Link></li>
                                    <li><Link className="link link-hover hover:text-indigo-700" href="#">Features</Link></li>
                                </ul>
                                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                                    <li><Link className="link link-hover hover:text-indigo-700" href="#">Careers</Link></li>
                                    <li><Link className="link link-hover hover:text-indigo-700" href="#">About </Link></li>
                                    <li><Link className="link link-hover hover:text-indigo-700" href="/contacts">Contact</Link></li>
                                    <li><Link className="link link-hover hover:text-indigo-700" href="#">Products</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
                            <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">Newsletter</h4>
                            <div className="grid gap-7 ">
                                <input type="text" name="email"
                                    className="py-2 px-4 border border-gray-300 shadow-sm h-14 text-lg text-gray-800 rounded-full w-full  xl:w-64 placeholder:text-gray-400 focus:outline-none"
                                    placeholder="Enter email.." />
                                <button type="submit"
                                    className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-indigo-600 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-indigo-700">Subscribe<svg
                                        width="17" height="13" viewBox="0 0 17 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                                            stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 bg-indigo-50">
                    <div className="flex items-center justify-center">
                        <span className="text-sm text-gray-800 ">Copyright@{new Date().getFullYear()} All Right Reserved  by <Link href="/">{SiteConfig.name}</Link></span>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;
