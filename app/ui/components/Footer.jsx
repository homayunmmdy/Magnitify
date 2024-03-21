import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>کپی رایت © {new Date().getFullYear()} - {}</p>
      </aside>
    </footer>
  );
};

export default Footer;
