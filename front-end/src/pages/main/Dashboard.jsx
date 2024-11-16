import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { SideBar } from "../../components/layout/SideBar";
import { Header } from "../../components/layout/Header";
import { Profile } from "../../components/layout/Profile";

export const Dashboard = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[90%] p-3">
          <h1 className="text-2xl font-semibold">Your projects</h1>
        </div>
      </div>
      <Profile />
    </div>
  )
}
