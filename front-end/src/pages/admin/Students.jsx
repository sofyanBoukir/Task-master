import { useEffect, useState } from "react"
import { AdminHeader } from "../../components/AdminHeader"
import { AdminSideBar } from "../../components/AdminSideBar"
import { AddStudent } from "../../components/AddUsers/AddUser";
import { EditStudent } from "../../components/EditUsers.jsx/EditUser";
import { Delete } from "../../components/DeleteModal/Delete";
import { getStudents } from "../../services/adminServices/studentsServices";
import { LinearProgress } from "@mui/material";
export const Students = () => {
    const [addStudent,setAddStudent] = useState(false);
    const [editStudent,setEditStudent] = useState(false);
    const [deleteStudent,setDeleteStudent] = useState(false);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [lastPage,setLastPage] = useState(0);
    const [totalStudents,setTotalStudents] = useState();

    const [studentsData,setStudentsData] = useState([]);

    const openAddStudent = () => setAddStudent(true);
    const closeAddStudent = () => setAddStudent(false);

    const openEditStudent = () => setEditStudent(true);
    const closeEditStudent = () => setEditStudent(false);

    const openDeleteStudent = () => setDeleteStudent(true);
    const closeDeleteStudent = () => setDeleteStudent(false);

    const getStudentsData = async () =>{
        setLoading(true);
        const response = await getStudents(page);
        setLoading(false);
        
        setLastPage(response.data.students.last_page);
        setTotalStudents(response.data.students.total);
        setStudentsData(response.data.students.data);
    }

    useEffect(() => {
        getStudentsData();
    },[page]);

  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] px-4 lg:ml-[18%]">
            <AdminHeader />
            <div className="mt-3">
                <div>
                    <h1 className="text-2xl font-semibold">All students</h1>
                </div>
                <div className="mt-4 flex justify-between w-[100%]">
                    <div className="w-[60%] flex gap-2">
                        <input type="text" placeholder="Search for students" className="bg-gray-100 font-semibold border-2 outline-none w-[60%] border-gray-400 px-3 py-2 rounded-md"/>
                        <input type="text" placeholder="Search based on username" className="bg-gray-100 font-semibold border-2 outline-none w-[40%] border-gray-400 px-3 py-2 rounded-md"/>
                    </div>
                    <div>
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-md" onClick={openAddStudent}>Add Student</button>
                    </div>
                </div>
                <div className="mt-5 w-[100%]">
                    <table className="w-[100%]">
                        <thead className="bg-gray-100 border border-gray-400 w-[100%]">
                            <tr>
                                <th className="px-3 py-2 text-gray-600">#</th>
                                <th className="px-3 py-2 text-gray-600">Full name</th>
                                <th className=" px-3 py-2 text-gray-600">username</th>
                                <th className="hidden md:table-cell px-3 py-2 text-gray-600">Grade</th>
                                <th className="hidden md:table-cell px-3 py-2 text-gray-600">Adress</th>
                                <th className="hidden md:table-cell px-3 py-2 text-gray-600">Gender</th>
                                <th className="hidden md:table-cell px-3 py-2 text-gray-600">Date of birth</th>
                                <th className="hidden md:table-cell px-3 py-2 text-gray-600">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border border-gray-400">
                            {
                                studentsData && studentsData.length ?
                                    studentsData.map((student) =>{
                                        return <>
                                            <tr>
                                                <td className="text-center text-lg py-2">{student.id}</td>
                                                <td className="text-center text-lg py-2">{student.full_name}</td>
                                                <td className="text-center text-lg py-2">{student.username}</td>
                                                <td className="text-center text-lg py-2 hidden md:table-cell">{student.grade}</td>
                                                <td className="text-center text-lg py-2 hidden md:table-cell">{student.adress.substr(1,20)}...</td>
                                                <td className="text-center text-lg py-2 hidden md:table-cell">{student.gender}</td>
                                                <td className="text-center text-lg py-2 hidden md:table-cell">{student.dob}</td>
                                                <td className="hidden md:table-cell text-center text-lg py-2">
                                                    <div className="flex gap-1 justify-center">
                                                        <button className="bg-red-500 text-white rounded-sm px-3 py-1" onClick={openDeleteStudent}>Delete</button>
                                                        <button className="bg-green-600 text-white rounded-sm px-3 py-1" onClick={openEditStudent}>Edit</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    }): null
                            }                           
                        </tbody>
                    </table>
                    <br></br>
                    {
                        studentsData && studentsData.length ? <div className="flex justify-between">
                            <span className="text-lg font-semibold">Showing 5 from {totalStudents}</span>
                            <div className="flex gap-4">
                                <button className="rounded-sm border-2 text-blue-500 border-blue-600 px-3 py-1" disabled={page===1} onClick={() => setPage(page - 1)}>Previous</button>
                                <button className="rounded-sm border-2 border-white text-white bg-blue-600 px-3 py-1" disabled={page === lastPage} onClick={() => setPage(page+1)}>Next</button>
                            </div>
                        </div>:null
                    }
                    {
                        loading && <LinearProgress />
                    }
                </div>
                {
                    addStudent && (
                        <AddStudent user={"Student"} close={closeAddStudent}/>
                    )
                }
                {
                    editStudent && (
                        <EditStudent user={"Student"} close={closeEditStudent}/>
                    )
                }
                {
                    deleteStudent && (
                        <Delete user={"Student"} close={closeDeleteStudent}/>
                    )
                }
            </div>
        </div>
      </div>
    </div>
  )
}