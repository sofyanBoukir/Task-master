import image from "../../public/image.png"
import { AdminHeader } from "./AdminHeader";
import { useState } from "react";
import { EditInfo } from "./Edit Forms/EditInfo";
import { EditAdress } from "./Edit Forms/EditAdress";
import { editImage } from "../services/adminServices/profileServices";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export const Profile = ({profile}) => {

  const [profilePhoto,setProfilePhoto] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [invalidPhoto,setInvalidPhoto] = useState(false);
  const [loading,setLoading] = useState(false);
  const userId = localStorage.getItem('userId');
  const [updated,setUpdated] = useState(false);
  const [open,setOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(profilePhoto === null){
      setInvalidPhoto(true);

    }else{
      setInvalidPhoto(false);
      setLoading(true);
      let formData = new FormData();
      formData.append("image",profilePhoto)
      const response = await editImage(userId,formData);
      setLoading(false);
      console.log(response);
      
      if(response.data.updated){
        setUpdated(true);
        setOpen(true);
      }
    }
  }
  return (
    <div className="px-4">
        <AdminHeader />
        <div className="mt-3">
          <h1 className="text-2xl font-semibold">My profile</h1>
          <div className="mt-2 bg-gray-100 border-2 rounded-lg px-4 py-3 flex gap-6 items-center">
            <div>
              <img src={profile.profile_picture ? 'http://localhost:8000/storage/admin/'+profile.profile_picture : image} className="h-24 w-24 rounded-full"/>
            </div>
            <div>
              <span className="text-xl font-semibold">{profile.full_name}</span><br></br>
              <span className="text-sm">{profile.role}</span><br></br>
              <span className="text-sm">{profile.adress}</span><br></br>
              <form onSubmit={handleSubmit}>
                <input type="file" name="image" onChange={(e) => setProfilePhoto(e.target.files[0])} className="w-52 cursor-pointer bg-blue-500 rounded-sm px-2 py-1  text-white"/><br></br>
                <button className="text-white cursor-pointer px-3 py-1 w-[70%] rounded-sm bg-blue-700 mt-2">
                {
                    loading ?
                    <CircularProgress color="white" size={"18px"}/>
                    : "Save Changes"
                }
                </button>
                <br></br>
                {
                  invalidPhoto &&
                  <span className="text-red-700">Upload an image!</span>
                }
              </form>
            </div>
          </div>

          {
            updated && (
                <Snackbar open={open} className="bg-green-600 rounded-md text-white cursor-pointer" 
                autoHideDuration={6000} onClick={() => setOpen(false)}>
                    <Alert
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                      Your profile photo updated successfully
                    </Alert>
                </Snackbar>
            )
        }

          <div className="mt-2 bg-gray-100 border-2 rounded-lg px-4 py-3">
            <div className="flex justify-between w-[100%]">
              <div>
                <h1 className="text-xl font-semibold">Personal informations</h1>
              </div>
              <div>
                <button
                  onClick={openModal}
                  className="bg-green-700 text-white px-3 py-1 rounded-sm"
                  type="button"
                >
                  <span>Edit</span>
                </button>
              </div>
            </div>
            <hr className="my-3 border-gray-400 brder-2"></hr>
            <div className="md:flex md:gap-48 ">
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Full name</label><br></br>
                <span className="text-lg font-semibold">{profile.full_name}</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Username</label><br></br>
                <span className="text-lg font-semibold">{profile.username}</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Date of birth</label><br></br>
                <span className="text-lg font-semibold">{profile.dob}</span>
              </div>
            </div>
            <div className="md:flex md:gap-48 mt-4">
              <div className="md:w-[20%]">
                  <label className="text-gray-600 text-sm">Email adress</label><br></br>
                  <span className="text-lg font-semibold">{profile.email}</span>
                </div>
                <div className="md:w-[20%]">
                  <label className="text-gray-600 text-sm">Phone number</label><br></br>
                  <span className="text-lg font-semibold">{profile.phone_number}</span>
                </div>
                <div className="md:w-[20%]">
                  <label className="text-gray-600 text-sm">User role</label><br></br>
                  <span className="text-lg font-semibold">{profile.role}</span>
                </div>
            </div>
            <div>
              {isModalOpen && (
                <EditInfo close={closeModal} profile={profile} />
              )}
            </div>
          </div>



          <div className="mt-2 bg-gray-100 border-2 rounded-lg px-4 py-3">
            <div className="flex justify-between w-[100%]">
              <div>
                <h1 className="text-xl font-semibold">Adress</h1>
              </div>
              <div>
                <button
                  onClick={openModal2}
                  className="bg-green-700 text-white px-3 py-1 rounded-sm"
                  type="button"
                >
                  <span>Edit</span>
                </button>
              </div>
            </div>
            <hr className="my-3 border-gray-400 brder-2"></hr>
            <div className="md:flex md:gap-48 ">
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Country</label><br></br>
                <span className="text-lg font-semibold">Morocco</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">City</label><br></br>
                <span className="text-lg font-semibold">{profile.city}</span>
              </div>
              <div className="md:w-[20%]">
                <label className="text-gray-600 text-sm">Adress</label><br></br>
                <span className="text-lg font-semibold">{profile.adress}</span>
              </div>
            </div>
            <div>
              {isModalOpen2 && (
                <EditAdress close={closeModal2} profile={profile} />
              )}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
    </div>
  )
}
