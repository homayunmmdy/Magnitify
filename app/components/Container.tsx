"use client"
import React from "react";
import { useContainer } from '../context/ContainerContext';

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "standard" | "wide"; 
}
const Container = ({ children, type, className = "" }: Props) => {
  const { containerType } = useContainer();
  
  // Use prop if provided, otherwise use context
  const selectedType = type || containerType;

  const ContainerTypes = {
    standard: "sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl",
    wide: "w-full md:px-8",
  };
  
  return (
    <div className={`${className} ${ContainerTypes[selectedType]} px-4 mx-auto `}>
      {children}
    </div>
  );
};

export default Container;