import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SideBar } from "../../components/layout/SideBar";
import { Header } from "../../components/layout/Header";
import { Profile } from "../../components/layout/Profile";
import { Project } from "../../components/project/Project";
import { Add } from "../../components/UI/Add";
import { AddProject } from "../../components/project/AddProject";
import { getProjects } from "../../services/projectService";
import { LinearLoading } from "../../components/UI/LinearLoading";

export const Dashboard = () => {
  const {user} = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const [projects,setProjects] = useState([]);
  
  const toggleAddProject = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getProjectsData = async () =>{
    setLoading(true);
    const response = await getProjects(localStorage.getItem("token"));
    setLoading(false);
    
    if(response.data.projectsFounded){
      setProjects(response.data.projects);
    }
  } 

  useEffect(() => {
    getProjectsData();
  },[]);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <h1 className="text-2xl font-semibold">Your projects</h1>
          {
            loading && <div className="mt-2">
              <LinearLoading />
            </div>
          }
          <div className="flex gap-4 mt-5 flex-wrap">
            {
              projects && projects.length ?
                projects.map((project) =>{ return <>
                  <Project project={project}/>
                </> 
                })
              : null
            }
          <Add text={"Project"} onclick={() =>toggleAddProject()}/>
          </div>
          {isModalOpen && (
            <AddProject toggleAddProject={toggleAddProject}/>
          )}
        </div>
      </div>
      <Profile />
    </div>
  )
}
