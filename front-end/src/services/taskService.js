import axios from "axios"

export const addTask = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/task/addTask",data);
    return response;
}

export const getTasks = async (token) =>{
    const response = await axios.get("http://localhost:8000/api/task/getTasks",{
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    return response;
}

export const editTaskStatus = async (data) =>{
    const response = await axios.patch("http://localhost:8000/api/task/editTaskStatus",data);
    return response;
}

export const getAssignedTasks = async (token,projectId) =>{
    const response = await axios.get(`http://localhost:8000/api/task/getAssignedTasks/${projectId}`,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
    return response;
}