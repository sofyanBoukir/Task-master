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