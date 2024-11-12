import { useState } from "react";
import { editPersonalInformations } from "../../services/adminServices/profileServices";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export const EditInfo = ({close,profile}) => {
    const closeModal = close;
    const userId = profile.id;
    const [loading,setLoading] = useState(false);
    const [usernameExist,setUsernameExist] = useState(false);
    const [updated,setUpdated] = useState(false);
    const [open,setOpen] = useState(false);

    const [formInfo,setFormInfo] = useState({
        full_name : profile.full_name,
        username : profile.username,
        dob : profile.dob,
        phone_number : profile.phone_number,
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormInfo(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(formInfo.full_name === '' || formInfo.username === '' 
            || formInfo.dob === '' || formInfo.phone_number === ''){
                return;
        }else{
            setLoading(true);
            const response = await editPersonalInformations(userId,formInfo);
            setLoading(false);
            if(response.data.exist_username){
                setUpdated(false);
                setUsernameExist(true);
                setOpen(true);
            }else{
                setUsernameExist(false);
                setUpdated(true);
                setOpen(true);
            }
        }
    }

return (
    <div>
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-80"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow text-black">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-black">
                    Edit Personal informations
                </h3>
                <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    aria-label="Close"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Full name</label><br></br>
                                <input type="text"
                                placeholder={profile.full_name}
                                className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"
                                value={formInfo.full_name}
                                onChange={handleChange}
                                name="full_name"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Username</label><br></br>
                                <input type="text" 
                                placeholder={profile.username} 
                                className="px-3 w-[100%] py-2 border border-gray-500 rounded-md"
                                value={formInfo.username}
                                onChange={handleChange}
                                name="username"/>
                            </div>
                        </div>
                        
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Date of birth</label><br></br>
                                <input type="date" 
                                placeholder={profile.dob} 
                                className="px-3 py-2 w-[100%] border border-gray-500 rounded-md"
                                value={formInfo.dob}
                                onChange={handleChange}
                                name="dob"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Phone number</label><br></br>
                                <input type="text" 
                                placeholder={profile.phone_number} 
                                className="px-3 w-[100%] py-2 border border-gray-500 rounded-md"
                                value={formInfo.phone_number}
                                onChange={handleChange}
                                name="phone_number"/>
                            </div>
                        </div>

                        <div>
                            <label>Email adress</label><br></br>
                            <input type="text" placeholder={profile.email} readOnly className="outline-none px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                        </div>
                        <div>
                            {
                                usernameExist && (
                                        <Snackbar open={open} className="bg-red-600 rounded-md text-white cursor-pointer" 
                                        autoHideDuration={6000} onClick={() => setOpen(false)}>
                                            <Alert
                                                severity="error"
                                                variant="filled"
                                                sx={{ width: '100%' }}
                                            >
                                                This username alreay exist
                                            </Alert>
                                        </Snackbar>
                                    )
                            }
                            {
                                updated && (
                                    <Snackbar open={open} className="bg-green-600 rounded-md text-white cursor-pointer" 
                                    autoHideDuration={6000} onClick={() => setOpen(false)}>
                                        <Alert
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            Your data updated successfully!
                                        </Alert>
                                    </Snackbar>
                                )
                            }
                        </div>
                        <div className="flex items-center pt-4 md:p-2 justify-end">
                            <button
                                type="submit"
                                className="bg-green-700 w-[25%] text-white px-4 py-1 rounded-sm items-center"
                            >
                                {
                                    loading ?
                                    <CircularProgress color="white" size={"18px"}/>
                                    : "Save Changes"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
