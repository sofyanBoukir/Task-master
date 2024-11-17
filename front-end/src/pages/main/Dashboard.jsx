import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { SideBar } from "../../components/layout/SideBar";
import { Header } from "../../components/layout/Header";
import { Profile } from "../../components/layout/Profile";
import { Project } from "../../components/project/Project";
import { Add } from "../../components/UI/Add";
import { AddProject } from "../../components/project/AddProject";

export const Dashboard = () => {
  const {user} = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAddProject = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="ml-16 w-[85%] p-3 mt-14">
          <h1 className="text-2xl font-semibold">Your projects</h1>
          <div className="flex gap-4 mt-5 flex-wrap">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
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
