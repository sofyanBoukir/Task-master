import { CheckCircleIcon, ArrowTrendingUpIcon, BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { editTaskStatus } from "../../services/taskService";
import { CircularProgress } from "@mui/material";
import { Notification } from "../UI/Notification";
import { useDispatch } from "react-redux";
import { handleUnsave, saveNewTask } from "../../redux/action/actions";

export const Task = ({task}) => {

    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState(null);
    const [saved,setSaved] = useState(false);
    const [taskData,setTaskData] = useState(task);
    const [alreadySaved,setAlreadySaved] = useState(false);
    const isOnSavedPage = window.location.pathname === '/main/saved';    
    const taskAlreadySaved = JSON.parse(localStorage.getItem("tasks")).some((savedTask) => savedTask.id === task.id); 
    const dispatch = useDispatch();

    
    const editTask = async (status) =>{
        var formData = {
            status : status,
            id : task.id,
        }

        setLoading(true);        
        const response = await editTaskStatus(formData);
        
        setLoading(false);
        if(!response.data.updated){
            setMessage(response.data.message);
            setTimeout(() => {
                setMessage(null)
            }, 2000);
            return;
        }
        setTaskData(response.data.task);        
    }

    const handleCompletedTask = () =>{
        editTask("completed");
    }

    const handleInProgressTask = () =>{
        editTask("in progress");
    }

    const saveTask = (newTask) =>{
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if(savedTasks.some((task) => task.id === newTask.id)){
            setAlreadySaved(true);
            setTimeout(() => {
                setAlreadySaved(false);
            }, 2000);
            return;
        }        
        dispatch(saveNewTask(newTask));
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 2000);
    }

    return ( 
    <div className={`relative ${loading?"flex":null} justify-center items-center w-full lg:w-[21%] bg-white rounded-md p-3 h-52 cursor-pointer hover:bg-gray-200 duration-150 ease-in`}>
        {
            !loading ? 
                <>
                    <div>
                        <h1 className="text-xl font-semibold">{task.title}</h1>
                        <h3 className="text-sm text-gray-600 font-semibold">
                        {task.description}
                        </h3>
                    </div>
                    <div className="absolute flex justify-between items-center bottom-2 left-3 right-3">
                        <div>
                            <span className="text-gray-500 font-semibold text-sm">{taskData.due_date}</span>
                        </div>
                        <div>   
                            <span className="text-gray-500 font-semibold text-sm">{taskData.priority}</span>
                        </div>
                        <div className="flex gap-1">
                            {
                                isOnSavedPage ?
                                    <BookmarkSlashIcon className="w-6 h-6 text-gray-400 duration-150 ease-in-out hover:text-yellow-900" onClick={() => dispatch(handleUnsave(taskData.id))}/>
                                :
                                    <BookmarkIcon className={`w-6 h-6 ${taskAlreadySaved ? 'text-gray-800' : null} text-gray-400 duration-150 ease-in-out hover:text-yellow-900`} onClick={() => saveTask(taskData)}/>
                            } 
                            <CheckCircleIcon className={`w-6 h-6 text-green-300 hover:text-green-900 ${taskData.status === 'completed'? 'text-green-800' :null} duration-150 ease-in-out`} onClick={() => handleCompletedTask()}/>
                            <ArrowTrendingUpIcon className={`w-6 h-6 text-blue-300 hover:text-blue-900 ${taskData.status === 'in progress'? 'text-blue-800' :null} duration-150 ease-in-out`} onClick={() => handleInProgressTask()}/>
                        </div>
                    </div>
                </>
            :
                <div className="flex">
                    <div>
                        <CircularProgress color="blue" size={"40px"} />
                    </div>
                </div>
        }
        {
            message && <Notification message={message} kind={"error"}/>
        }
        {
            saved && <Notification message={"Saved successfully!"} kind={"success"}/>
        }
        {
            alreadySaved && <Notification message={"Task already saved!"} kind={"error"}/>
        }
    </div>
  )
}
