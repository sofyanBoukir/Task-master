import { InboxStackIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import defaultImage from "../../../public/defaultImage.png";
import { Button } from "../UI/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { EditProfile } from "../UI/EditProfile";

export const Profile = () => {
  
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("userData"));

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleEditProfile = () => {
      setIsModalOpen(!isModalOpen);
  };

  const userLogout = async () =>{
    setLoading(true);
    const response = await logout();
    
    
    setLoading(false);
    if(response.data.loggedOut){
      navigate("/");
    }
  }
  return (
    <div className="w-[20%] hidden lg:block fixed right-0 pt-2 bg-white h-screen px-4 z-20">
        <div className="flex items-center gap-2 bg-gray-200 rounded-lg p-2">
            <div>
                <img className="w-14 h-14 rounded-full" src={user.profile_photo ? user.profile_photo : defaultImage} alt="userImage"/>
            </div>
            <div>
                <span className="font-semibold text-sm">Hello,</span>
                <p className="font-semibold text-md">{user ? user.full_name : "User"}</p>
            </div>
        </div>
        <div className="mt-2">
          <Button bg={"bg-green-700"} text={"Edit profile"} onclick={() => toggleEditProfile()}/>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded-md flex justify-between text-white items-center">
            <div>
              <p className="font-semibold text-2xl">10</p>
              <span className="text-xl font-semibold">Total tasks</span>
            </div>
            <RectangleStackIcon className="w-12 h-10"/>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2 rounded-md flex justify-between text-white items-center">
            <div>
              <p className="font-semibold text-2xl">10</p>
              <span className="text-xl font-semibold">Total projects</span>
            </div>
            <InboxStackIcon className="w-12 h-10"/>
          </div>
        </div>
        {
          isModalOpen && <EditProfile user={user} toggleEditProfile={toggleEditProfile}/>
        }
        <div className="mt-3 bg-gray-200 rounded-lg p-2 flex flex-col justify-center items-center">
          <h1 className="text-lg font-semibold">Completed vs pending tasks</h1>
          <p className="text-sm text-gray-500 font-semibold">Task completetion status</p>
          <div className="relative size-40 mt-2">
            <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="1.5" stroke-dasharray="75 100" stroke-linecap="round"></circle>

              <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="1.5" stroke-dasharray="37.5 100" stroke-linecap="round"></circle>
            </svg>

            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-500">10</span>
              <span className="text-blue-600 dark:text-blue-500 block font-semibold">Pending</span>
            </div>
          </div>
          <p className="text-gray-600 font-semibold text-sm">Analysyis based on tasks in the last 30days</p>
        </div>
        <div className="mt-4 absolute bottom-2 w-[90%]">
            <Button text={"Sign out"} bg={"bg-blue-700"} loading={loading} width={"100%"} onclick={() => userLogout()}/>
        </div>
    </div>
  )
}
