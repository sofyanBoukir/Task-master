import { Header } from "../../components/layout/Header"
import { Profile } from "../../components/layout/Profile"
import { SideBar } from "../../components/layout/SideBar"
import { Task } from "../../components/task/Task"
import { useSelector } from "react-redux"

export const SavedTasks = () => {
  const savedTasks = useSelector((state) => state.savedTasks);  
  
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <div>
            <h1 className="text-2xl font-semibold">Your Saved tasks</h1>
          </div>
          <div className="flex gap-4 mt-5 flex-wrap">
            {
              savedTasks && savedTasks.length ?
              savedTasks.map((task) =>{
                  return <Task task={task}/>
                })
              :null
            }
            {
              savedTasks.length === 0 && <span className="text-xl">No tasks saved!</span>
            }
          </div>
        </div>
      </div>
      <Profile />
    </div>
  )
}
