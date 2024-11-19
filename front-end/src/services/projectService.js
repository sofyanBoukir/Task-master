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