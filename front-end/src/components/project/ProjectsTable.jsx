import { useState } from "react"
import { Button } from "../UI/Button"
import { AddTask } from "../task/AddTask";
import moment from "moment";

export const ProjectsTable = ({project}) => {

    const [isAddTaskModalOpen,setIsAddTaskModalOpen] = useState(false);
    const toggleAddTask = () =>{
        setIsAddTaskModalOpen(!isAddTaskModalOpen);
    }

    const formatDate = (date) =>{
        return moment(date).fromNow();
    }
  return (
        <>
            {
                <tbody className="text-center bg-gray-100">
                    <tr className="border border-black">
                        <td className="py-2 px-2">{project.title.substr(0,40)}...</td>
                        <td className="py-2 px-2">{project.description.substr(0,40)}...</td>
                        <td className="py-2 px-2">{formatDate(project.created_at)}</td>
                        <td className="py-2 px-2 flex justify-center">
                            <Button text={"Add a task"} bg={"bg-blue-700"} width={"60%"} onclick={() => toggleAddTask()}/>
                        </td>
                    </tr>
                </tbody>
            }
            {
                isAddTaskModalOpen && <AddTask toggleAddTask={toggleAddTask} project={project}/>
            }
        </>         
  )
}
