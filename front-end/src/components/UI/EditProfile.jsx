import { Input } from '../UI/Input'
import { Label } from '../UI/Label'
import { Button } from '../UI/Button'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { editProfile } from '../../services/profileService'
import { Notification } from './Notification'

export const EditProfile = ({toggleEditProfile,user}) => {
  const {updateUser} = useContext(AuthContext);

  const [formData,setFormData] = useState({
    full_name : user.full_name,
    username : user.username,
    profile_photo : user.profile_photo ? user.profile_photo : null,
  });
  
  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState("");
  const [updated,setUpdated] = useState(null);

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData((prevState) =>({
      ...prevState,
      [name] : value,
    }));
  }
  
  const handleSubmit = async (e) =>{
    setUpdated(null);
    e.preventDefault();
    setLoading(true);
    const response = await editProfile(formData,localStorage.getItem("token"));
    setLoading(false);
    
    if(response.data.updated){
      setMessage(response.data.message);
      setUpdated(true);
      updateUser(response.data.user)
    }else{
      setMessage(response.data.message);
      setUpdated(false);
    }
  }
  

  const handleImageChange = (e) =>{
    setFormData({ ...formData, profile_photo: e.target.files[0] });
  }
  
  return (
    <div>
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative p-4 w-[100%] md:w-[40%] max-w-2xl max-h-full">
            <div className="relative bg-white text-black rounded-md">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
                    Edit profile
                </h3>
                <button
                  onClick={toggleEditProfile}
                  type="button"
                  className="text-gray-400 bg-transparent text-sm w-8 h-8 inline-flex justify-center items-center "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit}>
                    <Label text={"Full name"} />
                    <Input type={"text"} name={"full_name"} value={formData.full_name} onChange={handleChange}/>
                    <br></br>
                    <br></br>
                    <Label text={"Username"} />
                    <Input type={"text"} name={"username"} value={formData.username} onChange={handleChange}/>
                    <br></br>
                    <br></br>
                    <Label text={"Email adress"} />
                    <Input type={"email"} placeholder={user.email} name={"email"} readOnly={true}/>
                    <br></br>
                    <br></br>
                    <Label text={"Change profile photo"} />
                    <Input type={"file"} required={false} onChange={handleImageChange}/>
                    <div className='mt-3'>
                      <Button text={"Save changes"} type={"submit"} bg={"bg-blue-700"} loading={loading}/>
                    </div>
                </form>
              </div>    
              {
                updated && <Notification message={message} kind={"success"}/>
              }
              {
                updated === false && <Notification message={message} kind={"error"}/>
              }          
            </div>
          </div>
        </div>
    </div>
  )
}
