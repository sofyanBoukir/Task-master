import axios from "axios";

export const editProfile = async (data,token) =>{
    const response = await axios.post("http://localhost:8000/api/profile/editProfile",data,
        {
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        }
    )
    return response;
}   