import { useState } from "react"
import { AdminHeader } from "../../components/AdminHeader"
import { AdminSideBar } from "../../components/AdminSideBar"
import { AddStudent } from "../../components/AddUsers/AddStudent";
import { EditStudent } from "../../components/EditUsers.jsx/EditStudent";
import { Delete } from "../../components/DeleteModal/Delete";
export const Students = () => {
    const [addStudent,setAddStudent] = useState(false);
    const [editStudent,setEditStudent] = useState(false);
    const [deleteStudent,setDeleteStudent] = useState(false);

    const openAddStudent = () => setAddStudent(true);
    const closeAddStudent = () => setAddStudent(false);

    const openEditStudent = () => setEditStudent(true);
    const closeEditStudent = () => setEditStudent(false);

    const openDeleteStudent = () => setDeleteStudent(true);
    const closeDeleteStudent = () => setDeleteStudent(false);

  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] px-4">
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
                            <tr>
                                <td className="text-center text-lg py-2">#</td>
                                <td className="text-center text-lg py-2">Full name</td>
                                <td className="text-center text-lg py-2">username</td>
                                <td className="text-center text-lg py-2 hidden md:table-cell">Grade</td>
                                <td className="text-center text-lg py-2 hidden md:table-cell">Adress</td>
                                <td className="text-center text-lg py-2 hidden md:table-cell">Gender</td>
                                <td className="text-center text-lg py-2 hidden md:table-cell">Date of birth</td>
                                <td className="hidden md:table-cell text-center text-lg py-2">
                                    <div className="flex gap-1 justify-center">
                                        <button className="bg-red-500 text-white rounded-sm px-3 py-1" onClick={openDeleteStudent}>Delete</button>
                                        <button className="bg-green-600 text-white rounded-sm px-3 py-1" onClick={openEditStudent}>Edit</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {
                    addStudent && (
                        <AddStudent close={closeAddStudent}/>
                    )
                }
                {
                    editStudent && (
                        <EditStudent close={closeEditStudent}/>
                    )
                }
                {
                    deleteStudent && (
                        <Delete close={closeDeleteStudent}/>
                    )
                }
            </div>
        </div>
      </div>
    </div>
  )
}