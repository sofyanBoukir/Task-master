import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { exitAProject } from "../../redux/action/projectsActions";
import { CircularProgress } from "@mui/material";

export const ProjectUserWith = ({project}) => {
    const [projectMembers,setProjectMembers] = useState(
        project.project.members
    );
    
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);

    const exitProject = (projectId) =>{
        const token = localStorage.getItem("token");
        if (token) {
            setLoading(true);
            dispatch(exitAProject(token,projectId));
            setLoading(false);
        }
    }

  return (
    <div className="w-[88%] rounded-md bg-white px-5 py-2 shadow-md">
        <div className="flex gap-2 items-center">
            <div>
                <img src={project.project.creator.profile_photo} alt="user image" className="rounded-full w-10 h-10" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-semibold">{project.project.creator.full_name}</span>
                <span className="text-sm font-semibold text-gray-600">{project.project.creator.username}</span>
            </div>
        </div>
        <br></br>
        <div>
            <h1 className="text-xl font-semibold">{project.project.title}</h1>
            <p>{project.project.description}</p>
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
            {
                projectMembers && projectMembers.length ?
                    projectMembers.map((member) =>{
                        return <>
                            <div className={`${member.role === 'owner' ? "bg-green-700" : "bg-blue-700"} text-white rounded-3xl border-2 border-black px-2`}>
                                <span>{member.user.username}</span>
                            </div>
                        </>
                    })
                : null
            }
        </div>
        <div className="float-right">
            {
                loading ? 
                    <CircularProgress size={"20px"} color="black" />
                        :
                    <ArrowRightStartOnRectangleIcon className="w-7 h-7 cursor-pointer hover:text-black duration-300 text-gray-400" onClick={() => exitProject(project.project_id)}/>
            }
        </div>
    </div>
  )
}
