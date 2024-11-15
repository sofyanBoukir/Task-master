import axios from "axios"

export const sendVerifyCode = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/sendVerifyCode",data);
    return response;
}

export const verifyCode = async (data) =>{
    const response = await axios.post("http://localhost:8000/api/auth/verifyCode",data);
    return response;
}