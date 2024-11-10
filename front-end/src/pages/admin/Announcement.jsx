import { AdminHeader } from "../../components/AdminHeader"
import { AdminSideBar } from "../../components/AdminSideBar"
import image from '../../../public/image.png'
export const Announcement = () => {

  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] px-4 lg:ml-[18%]">
            <AdminHeader />
            <div className="mt-3">
                <div>
                    <h1 className="text-2xl font-semibold">Announcement</h1>
                </div>  
                <div className="mt-4">
                    <form>
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label className="text-md font-semibold">Announcement title</label><br></br>
                                <input type="text" placeholder="Max Charachters 50" className="bg-gray-100 font-semibold border-2 outline-none w-[100%] border-gray-400 px-3 py-2 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label className="text-md font-semibold">Announcement reicevers</label><br></br>
                                <select className="bg-gray-100 font-semibold border-2 outline-none w-[100%] border-gray-400 px-3 py-2 rounded-md cursor-pointer">
                                    <option value="">Select Receivers</option>
                                    <option value="Students">Students</option>
                                    <option value="Teachers">Teachers</option>
                                    <option value="Admins">Admins</option>
                                    <option value="All">All</option>
                                </select>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <label className="text-md font-semibold">Announcement description</label><br></br>
                            <textarea className="bg-gray-100 font-semibold border-2 outline-none w-[100%] border-gray-400 px-3 py-2 rounded-md" placeholder="Max charachetrs 500"></textarea>
                        </div>
                        <div className="mt-3 flex justify-end gap-2">
                            <button className="px-3 py-1 rounded-sm bg-gray-300">Cancel</button>
                            <button className="bg-blue-600 text-white rounded-sm px-3 py-1">Send Announcement</button>
                        </div>
                    </form>
                </div>
                <div className="mt-4">
                    <div>
                        <h1 className="text-lg font-semibold">Recent announcement</h1>
                    </div>
                    <table className="w-[100%] mt-2 bg-gray-200 ">
                        <tbody>
                            <tr className="border-2 border-black rounded-lg">
                                <td className="text-md px-3 py-2 hidden md:block">
                                    <img src={image} className="w-6 h-6 rounded-full" />
                                </td>
                                <td className="text-md px-3 py-2 font-semibold">Soufian boukir</td>
                                <td className="text-md px-3 py-2 font-semibold">
                                    Many designs also incorporate features for filtering announcements,
                                </td>
                                <td className="text-md px-3 py-2 font-semibold">14-05-2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}