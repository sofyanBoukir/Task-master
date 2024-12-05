import { useEffect, useState } from "react"
import { Header } from "../../components/layout/Header"
import { Profile } from "../../components/layout/Profile"
import { SideBar } from "../../components/layout/SideBar"
import { AssignedTask } from "../../components/task/AssignedTask"
import { getAssignedTasks } from "../../services/taskService"
import { LinearLoading } from "../../components/UI/LinearLoading"
import { getProjects } from "../../services/projectService"

export const AssignedTasks = () => {    
  const [loading,setLoading] = useState();
  const [assignedTasksData,setAssignedTasksData] = useState([]);
  const [projects,setProjects] = useState([]);
  const [selectedProject,setSelectedProject] = useState(0);

  const getAssignedTasksData = async () =>{
    setLoading(true)
    const response = await getAssignedTasks(localStorage.getItem("token"),selectedProject);
    setLoading(false)
    if(response.data.assignedTasks){
      setAssignedTasksData(response.data.assignedTasks);        
    }            
  }

  const getAuthUserData = async () =>{
    const response = await getProjects(localStorage.getItem("token"));
    if(response.data.projectsFounded){
      setProjects(response.data.projects)
    }
  }  

  useEffect(() =>{
    if(selectedProject !== 0){
      getAssignedTasksData();
    }
  },[selectedProject])

  useEffect(() =>{
    getAuthUserData();
  },[])

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <h1 className="text-2xl font-semibold">Assigned tasks</h1>
          <input type="text" placeholder="Search tasks" className="mt-2 px-2 py-1 rounded-md border w-[60%]" />
          <br></br>
          <br></br>
          {
            projects && projects.length ? <select className="bg-white rounded-sm px-3 py-1 cursor-pointer" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
              <option>SELECT A PROJECT</option>
              {
                projects.map((project) => {
                  return <option value={project.id}>{project.title}</option>
                })
              }
            </select> : null 
          }
          <br></br>
          <br></br>
          {
            loading && <LinearLoading />
          }
          <div className="flex gap-2 mt-5 flex-col">
            {
              assignedTasksData && assignedTasksData.length ?
                assignedTasksData.map((assignedTask) =>{
                      return <AssignedTask assignedTask={assignedTask}/>
                })
              :<p className="text-xl font-semibold">No tasks assigned on this project!</p>
            }
          </div>
        </div>
      </div>
      <Profile />
    </div>
  )
}
