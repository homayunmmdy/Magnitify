import ReactQueryProvider from "./ReactQueryProvider"
import { ClerkProvider } from "@clerk/nextjs"

const Provider = ({ children }) => {
    return (
        <>
            <ClerkProvider>
                <ReactQueryProvider>
                    {children}
                </ReactQueryProvider >
            </ClerkProvider>
        </>
    )
}

export default Provider