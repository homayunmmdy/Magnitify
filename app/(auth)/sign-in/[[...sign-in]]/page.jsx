import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (<>
    <div className="flex justify-center py-5"><SignIn path="/sign-in" /></div>
  </>);
}