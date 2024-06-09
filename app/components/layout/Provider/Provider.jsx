import { Suspense } from "react"
import ReactQueryProvider from "./ReactQueryProvider"
import { ClerkProvider } from "@clerk/nextjs"
import Loading from "@/app/loading"

const Provider = ({ children }) => {
    return (
        <>
            <ClerkProvider>
                <ReactQueryProvider>
                <Suspense fallback={<Loading />}>
                    {children}
                    </Suspense>
                </ReactQueryProvider >
            </ClerkProvider>
        </>
    )
}

export default Provider