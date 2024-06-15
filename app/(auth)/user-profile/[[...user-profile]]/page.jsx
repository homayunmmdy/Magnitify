import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex justify-center py-5 mt-10"> <UserProfile path="/user-profile" /></div>
  )
}

export default UserProfilePage