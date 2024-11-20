import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ProjectDetails } from "./ProjectDetails";
import moment from "moment";

export const Project = ({project}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleEditProject = () => {
        setIsModalOpen(!isModalOpen);
    };

    const formatDate = (date) =>{
        return moment(date).fromNow();
    }

    return ( 
    <div className="relative w-full lg:w-[21%] bg-white rounded-md p-3 h-52 cursor-pointer hover:bg-gray-200 duration-150 ease-in">
        <h1 className="text-xl font-semibold">{project.title}</h1>
        <h3 className="text-sm text-gray-600 font-semibold">
        {project.description.substr(0,100)}...
        </h3>
        <div className="absolute flex justify-between items-center bottom-2 left-3 right-3">
        <div>
            <span className="text-gray-500 font-semibold text-sm">{formatDate(project.created_at)}</span>
        </div>
        <div className="flex gap-1">
            <div onClick={() => toggleEditProject()}>
                <PencilSquareIcon className="w-6 h-6 text-blue-500 hover:text-blue-800 duration-150 ease-in-out" />
            </div>
            <TrashIcon className="w-6 h-6 text-red-500 hover:text-red-800 duration-150 ease-in-out"/>
        </div>
        </div>
        {
            isModalOpen && <ProjectDetails project={project} toggleEditProject={toggleEditProject}/>
        }
    </div>
  )
}
