import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`${className} px-4 mx-auto sm:max-w-xl
            md:max-w-3xl 
            lg:max-w-5xl 
            xl:max-w-7xl`}
    >
      {children}
    </div>
  );
};

export default Container;
