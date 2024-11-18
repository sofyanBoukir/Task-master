import axios from "axios"


const token = localStorage.getItem("token");

export const sendVerifyCode = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/sendVerifyCode",data);
    return response;
}

export const verifyCode = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/verifyCode",data);
    return response;
}

export const login = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/login",data);
    return response;
}

export const forgotPassword = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/forgotPassword",data);
    return response;
}

export const resetPassword = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/resetPassword",data);
    return response;
}

export const userLogout = async () =>{
    const response = await axios.post("http://localhost:8000/api/auth/logout",{},
        {
            headers:{
                "Authorization" : `Bearer ${token}`,
            }
        }
    )
    return response;
}