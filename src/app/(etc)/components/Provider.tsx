import Loading from "@/app/loading";
import { ReactQueryProvider } from "@/components";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";

// @ts-ignore
const Provider = ({ children }) => {
  return (
    <>
      <ClerkProvider>
        <ReactQueryProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ReactQueryProvider>
      </ClerkProvider>
    </>
  );
};

export default Provider;
