import { AdminSideBar } from "../../components/AdminSideBar"
import { Profile } from "../../components/Profile"
export const AdminProfile = () => {
  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%]">
            <Profile />
        </div>
      </div>
    </div>
  )
}