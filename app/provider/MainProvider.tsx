import React from "react";
import { ContainerProvider } from "../context/ContainerContext";
import ReactQueryProvider from "./ReactQueryProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ContainerProvider>{children}</ContainerProvider>
    </ReactQueryProvider>
  );
}
