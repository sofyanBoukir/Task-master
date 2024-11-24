import { useEffect, useState } from "react"
import { Header } from "../../components/layout/Header"
import { Profile } from "../../components/layout/Profile"
import { SideBar } from "../../components/layout/SideBar"
import { Task } from "../../components/task/Task"
import { LinearLoading } from "../../components/UI/LinearLoading"
import { getTasks } from "../../services/taskService"

export const Tasks = () => {
  const [loading,setLoading] = useState(false);
  const [tasks,setTasks] = useState([]);

  const getTasksData = async () =>{
    setLoading(true);
    const response = await getTasks(localStorage.getItem("token"));
    setLoading(false);
    if(response.data.tasksExists){
      setTasks(response.data.tasks);
      return;
    }
  }

  useEffect(() =>{
    getTasksData();
  },[])

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <div>
            <h1 className="text-2xl font-semibold">Your Tasks</h1>
          </div>
          {
            loading && <div className="mt-2">
              <LinearLoading />
            </div>
          }
          <div className="flex gap-4 mt-5 flex-wrap">
            {
              tasks && tasks.length ?
                tasks.map((task) =>{
                  return <Task task={task}/>
                })
              :null
            }
            {
              loading === false && tasks.length === 0 && <span className="text-xl">No tasks available!</span>
            }
          </div>
        </div>
      </div>
      <Profile />
    </div>
  )
}
