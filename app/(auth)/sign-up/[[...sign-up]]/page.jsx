import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <><div className="flex justify-center py-5 mt-10"><SignUp path="/sign-up" /></div></>
  )
}