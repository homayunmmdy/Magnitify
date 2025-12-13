import React from "react";
import { ContainerProvider } from "../context/ContainerContext";
import { SearchProvider } from "../context/SearchContext";
import ReactQueryProvider from "./ReactQueryProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <SearchProvider>
        <ContainerProvider>{children}</ContainerProvider>
      </SearchProvider>
    </ReactQueryProvider>
  );
}
