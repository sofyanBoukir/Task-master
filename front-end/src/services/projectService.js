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

export const getProjectMembers = async (id) =>{
    const response = await axios.get(`http://localhost:8000/api/project/getProjectDetails/${id}`);
    return response;
}

export const updateProject = async (data) =>{
    const response = await axios.put(`http://localhost:8000/api/project/updateProject`,data);
    return response;
}

export const deleteProject = async (id,token) =>{
    const response = await axios.delete(`http://localhost:8000/api/project/deleteProject/${id}`,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
    return response;
}

export const getProjectsUserWith = async (token) =>{
    const response = await axios.get("http://localhost:8000/api/project/projectsUserWith",{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
    return response;
}