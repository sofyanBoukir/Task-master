import axios from "axios"

export const getStudents = async (next) =>{
    const response = await axios.get(`http://localhost:8000/api/admin/students/getStudents?page=${next}`);
    return response;
}