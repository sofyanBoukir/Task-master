import { useEffect, useState } from "react"
import { AdminSideBar } from "../../components/AdminSideBar"
import { Profile } from "../../components/Profile"
import { getProfileData } from "../../services/adminServices/profileServices";
import { LinearProgress } from "@mui/material";

export const AdminProfile = () => {

  const userId = localStorage.getItem("userId");
  const [profileData,setProfileData] = useState({});
  const [loading,setLoading] = useState(false);

  const getProfile = async () =>{
    setLoading(true)
    const response = await getProfileData(userId);
    setProfileData(response);
    setLoading(false)
    return response;
  } 

  useEffect(() =>{
    getProfile();
  },[]);  

  return (
    <div>
      <div className="flex gap-5">
        <AdminSideBar />
        <div className="lg:w-[80%] w-[100%] lg:ml-[18%]">
          {
            loading?
            <LinearProgress />
            :
            <Profile profile={profileData}/>
          }
        </div>
      </div>
    </div>
  )
}