import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  headBg?: "green" | "blue";
}

const ContentWrapper = ({ title, children, headBg = "green" }: Props) => {
  const headerColors = {
    green: "border-[#a3bfb1] bg-[#cef2e0]",
    blue: "border-[#a3b0bf] bg-[#cedff2]",
  };
  return (
    <section className="border border-[#cef2e0] bg-[#f5fffa]  p-2.5">
      <header
        className={`border ${headerColors[headBg]} py-1 px-2.5 font-bold mb-2.5`}
      >
        {title}
      </header>
      {children}
    </section>
  );
};

export default ContentWrapper;
