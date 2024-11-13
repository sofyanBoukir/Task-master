import { useState } from "react";
import { editStudent } from "../../services/adminServices/studentsServices";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export const EditStudent = ({id,user,close}) => {
    const closeModal = close;
    const [formData,setFormData] = useState({
        username : '',
        password : '',
        r_password : '',
    });
    const [open,setOpen] = useState(true);
    const [loading,setLoading] = useState(false);
    const [updated,setUpdated] = useState(null);
    const [formError,setFormError] = useState(false);
    const [usernameExist,setUsernameExist] = useState(false);
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(prevState =>({
            ...prevState,
            [name] : value,
        }));
    }

    const editSt = async () =>{
        setLoading(true);
        const response = await editStudent(id,formData);
        setLoading(false);
        if(!response.data.updated){
            setUpdated(false);
            setUsernameExist(true);
        }else{
            setUpdated(true);
            setUsernameExist(false);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.username === '' || (formData.password !== formData.r_password)){
            setFormError(true);
        }else{
            editSt();
        }
    }

return (
    <div>
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative dark:bg-gray-800 text-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibol">
                    Edit <span className="text-2xl font-semibold">{user}</span>
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
                        <div>
                            <label>Username</label><br></br>
                            <input type="text" 
                            placeholder="Username" 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"
                            />
                        </div>

                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Password</label><br></br>
                                <input type="password" 
                                placeholder="Password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Confirm password</label><br></br>
                                <input type="password" 
                                placeholder="Confirm password" 
                                name="r_password"
                                value={formData.r_password}
                                onChange={handleChange}
                                className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>
                        {
                            formError && <span className="text-red-500">An Error on the form!</span>
                        }
                        {
                            usernameExist && <span className="text-red-500">This username alredy exists!</span>
                        }
                        <div className="flex items-center p-4 md:p-5 justify-end">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-1 rounded-sm w-[18%]"
                            >
                                {   
                                loading ? 
                                    <CircularProgress size={"18px"} color="white"/>
                                    : "Edit"
                                }
                            </button>
                        </div>
                    </form>
                    {
                        updated && (
                            <Snackbar open={open} className="bg-green-600 rounded-md text-white cursor-pointer" 
                                autoHideDuration={6000} onClick={() => setOpen(false)}>
                                    <Alert
                                        severity="success"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                    Updated successfully!
                                    </Alert>
                            </Snackbar>
                        )
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}