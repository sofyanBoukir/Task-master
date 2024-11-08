import axios from "axios"

export const login = async (data) =>{
  try{
    const response = await axios.post("http://127.0.0.1:8000/api/auth/login",data)
    return response;
  }
  catch(error){
    return null;
  }
}

export const logout = () =>{
  axios.post("")
}