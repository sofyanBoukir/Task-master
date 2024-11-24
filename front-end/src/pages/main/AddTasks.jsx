import { useEffect, useState } from "react"
import { Header } from "../../components/layout/Header"
import { Profile } from "../../components/layout/Profile"
import { SideBar } from "../../components/layout/SideBar"
import { getProjects } from "../../services/projectService"
import { LinearLoading } from "../../components/UI/LinearLoading"
import { ProjectsTable } from "../../components/project/ProjectsTable"

export const AddTasks = () => {

    const [loading,setLoading] = useState(false);
    const [projects,setProjects] = useState([]);
    
    const getProjectsData = async () =>{
        setLoading(true);
        const response = await getProjects(localStorage.getItem("token"));
        setLoading(false);
        if(response.data.projectsFounded){
            setProjects(response.data.projects);
        }
    }

    useEffect(()=>{
        getProjectsData();
    },[]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <h1 className="text-2xl font-semibold">Add tasks to your projects</h1>
            {
                loading && <div className="mt-2">
                    <LinearLoading />
                </div>
            }
          <div className="flex gap-4 mt-5 flex-wrap">
            {
                projects && projects.length ?
                    <>
                        <table className="w-[88%]">
                            <thead className="bg-gray-300">
                                <tr className="border border-black">
                                    <th className="py-2 px-2">Title</th>
                                    <th className="py-2 px-2">Description</th>
                                    <th className="py-2 px-2">Created at</th>
                                    <th className="py-2 px-2">Add a tasks on this project</th>
                                </tr>
                            </thead> 
                            {
                                projects.map((project) => {
                                    return <ProjectsTable project={project} />
                                })
                            }
                        </table>    
                    </>
                : null
            }
            {
                loading === false && projects.length === 0 &&  <span className="text-xl font-semibold">Try to create a project to add tasks!</span>
            }
          </div>
        </div>
      </div>
      <Profile />
    </div>
  )
}
