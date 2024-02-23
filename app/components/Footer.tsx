import Link from "next/link";
import React from "react";
import SiteConfig from "../../config/site";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        {/* <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <Link className="hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-900" href="/about">
            About
          </Link>
          <Link className="hover:text-gray-900" href="/tech">
            Tech
          </Link>
          <a className="hover:text-gray-900" href="#">
            Media
          </a>
          <a className="hover:text-gray-900" href="#">
            Gallery
          </a>
          <Link className="hover:text-gray-900" href="/contactus">
            Contact Us
          </Link>
        </nav> */}

        {/* <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div> */}
        <p className="text-center text-gray-700 font-medium">
       کپی رایت © {new Date().getFullYear()} {SiteConfig.siteName} 
        </p>
      </footer>
    </div>
  );
};

export default Footer;