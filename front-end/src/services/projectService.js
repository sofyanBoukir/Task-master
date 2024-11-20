import axios from "axios"

export const searchUsers = async (data,token) =>{
    const response = await axios.post("http://localhost:8000/api/project/searchUsers",data,
        {
            headers :{
                "Authorization" : `Bearer ${token}`,
            }
        }
    );
    return response;
}

export const getProjects = async (token) =>{
    const response = await axios.get("http://localhost:8000/api/project/getProjects",{
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    });

    return response;
}
export const addProject = async (data,token) =>{
    const response = await axios.post("http://localhost:8000/api/project/addProject",data,
        {
            headers :{
                "Authorization" : `Bearer ${token}`, 
            }
        }
    );
    return response;
}