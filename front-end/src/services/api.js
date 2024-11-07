import axios from "axios";

const api = axios.create({
    baseURL:"localhost:8000/api",
    headers:{
        "Content-type":"application/json",
    },
});

export default api;