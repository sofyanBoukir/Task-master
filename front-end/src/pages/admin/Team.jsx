import { useState } from "react";
import { AdminHeader } from "../../components/AdminHeader"
import { AdminSideBar } from "../../components/AdminSideBar"
import { TrashIcon } from "@heroicons/react/16/solid";
import {PencilSquareIcon} from "@heroicons/react/16/solid";
import { ChangePassword } from "../../components/Edit Forms/ChangePassword";
import { Delete } from "../../components/DeleteModal/Delete";
import { AddAdmin } from "../../components/AddUsers/AddAdmin";
export const Team = () => {
  const [changePassword,setChangePassword] = useState(false);
  const [deleteUser,setDeleteUser] = useState(false);
  const [addUser,setAddUser] = useState(false);

  const openChangePassword = () => setChangePassword(true);
  const closeChangePassword = () => setChangePassword(false);

  const openDeleteUser = () => setDeleteUser(true);
  const closeDeleteUser = () => setDeleteUser(false);

  const openAddUser = () => setAddUser(true);
  const closeAddUser = () => setAddUser(false);

  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] px-4 lg:ml-[18%]">
            <AdminHeader />
              <div className="mt-3">
                  <div className="flex justify-between">
                      <h1 className="text-2xl font-semibold">Team management</h1>
                      <button className="text-white rounded-sm px-3 py-1 bg-blue-600" onClick={openAddUser}>Add user</button>
                  </div>
                  <div className="mt-4">
                    <div>
                      <table className="w-[100%] border border-black">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="py-2">#</th>
                            <th className="py-2">User Name</th>
                            <th className="py-2">Access</th>
                            <th className="py-2">Date added</th>
                            <th className="py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody className="text-center ">
                          <tr>
                            <td className="py-2 font-semibold">1</td>
                            <td className="py-2 font-semibold">soufian boukir</td>
                            <td className="py-2">
                              <div className="flex gap-2 justify-center">
                                <div className="bg-green-300 border-2 border-green-600 px-3 rounded-2xl">
                                  <span className="text-green-800 text-sm font-semibold">Super admin</span>
                                </div>
                                <div className="bg-blue-100 border-2 border-blue-600 px-3 rounded-2xl">
                                  <span className="text-blue-800 text-sm font-semibold">Read & Insert Data</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-2">22-02-2024</td>
                            <td className="py-2">
                              <div className="flex gap-2 justify-center">
                                <button className="bg-red-600 px-3 py-1 rounded-sm" onClick={openDeleteUser}><TrashIcon className="h-6 w-6 text-white"/></button>
                                <button className="bg-green-600 px-3 py-1 rounded-sm"><PencilSquareIcon className="h-6 w-6 text-white" onClick={openChangePassword}/></button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
              {
                changePassword && (
                  <ChangePassword close={closeChangePassword} />
                )
              }
              {
                deleteUser && (
                  <Delete user={"Soufian"} close={closeDeleteUser}/>
                )
              }
              {
                addUser && (
                  <AddAdmin close={closeAddUser} />
                )
              }
        </div>
      </div>
    </div>
  )
}