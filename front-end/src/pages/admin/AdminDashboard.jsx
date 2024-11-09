import { Adashboard } from "../../components/Adashboard"
import { AdminSideBar } from "../../components/AdminSideBar"
export const AdminDashboard = () => {
  return (
    <div>
      <div className="flex gap-5">
          <AdminSideBar />
        <div className="lg:w-[80%] w-[100%]">
          <Adashboard />   
        </div>
      </div>
    </div>
  )
}
