import { Header } from "../../components/layout/Header"
import { Profile } from "../../components/layout/Profile"
import { SideBar } from "../../components/layout/SideBar"
import { AssignedTask } from "../../components/task/AssignedTask"

export const AssignedTasks = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <h1 className="text-2xl font-semibold">Assigned tasks</h1>
          <input type="text" placeholder="Search tasks" className="mt-2 px-2 py-1 rounded-md border w-[60%]" />
          <div className="flex gap-2 mt-5 flex-col">
            <AssignedTask />
            <AssignedTask />
            <AssignedTask />
            <AssignedTask />
            <AssignedTask />
            <AssignedTask />
          </div>
        </div>
      </div>
      <Profile />
    </div>
  )
}
