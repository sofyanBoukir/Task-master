import api from "./api"

export const login = (credentials) => {
  try{
    let response = api.post("/login",credentials);
    return response.data;
  }
  catch(error){
    throw new Error("Cant login");
  }
}