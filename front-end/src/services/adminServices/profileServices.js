import axios from "axios"

export const getProfileData = async (id) =>{
    const response = await axios.get(`http://localhost:8000/api/admin/profile/show/${id}`)
    return response.data.profile;
}

export const editPersonalInformations = async (id,data) =>{
    const response = await axios.patch(`http://localhost:8000/api/admin/profile/editPersonalInfo/${id}`,data)
    return response;
}