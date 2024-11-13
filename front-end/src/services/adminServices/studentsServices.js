import axios from "axios"

export const getStudents = async (next) =>{
    const response = await axios.get(`http://localhost:8000/api/admin/students/getStudents?page=${next}`);
    return response;
}

export const getStudentsByName = async (name) =>{
    const response = await axios.get(`http://localhost:8000/api/admin/students/getStudentsByName/${name}`);
    return response;
}

export const deleteStudent = async (id) =>{
    const response = await axios.delete(`http://localhost:8000/api/admin/students/deleteStudent/${id}`);
    return response;
}

export const editStudent = async (id,data) =>{
    const response = await axios.patch(`http://localhost:8000/api/admin/students/editStudent/${id}`,data);
    return response;
}