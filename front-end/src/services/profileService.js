import axios from "axios";

const token = localStorage.getItem("token");
export const editProfile = async (data) =>{
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