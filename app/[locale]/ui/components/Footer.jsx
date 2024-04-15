import React from "react";
import SiteConfig from "../../config/site";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-100 text-base-content">
      <aside>
        <p>کپی رایت © {new Date().getFullYear()} - {SiteConfig.name}</p>
      </aside>
    </footer>
  );
};

export default Footer;
