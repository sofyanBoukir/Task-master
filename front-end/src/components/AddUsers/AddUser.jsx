import { useState } from "react";
import { insertStudent } from "../../services/adminServices/studentsServices";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

export const AddStudent = ({user,close}) => {
    const closeModal = close;
    const [usernameExist,setUsernameExist] = useState(false);
    const [inserted,setInserted] = useState(false);
    const [loading,setLoading] = useState(false);
    const [open,setOpen] = useState(true);

    const [formData,setFormData] = useState({
        full_name : '',
        username : '',
        dob : '',
        phone_number : '',
        city : '',
        adress : '',
        gender : '',
        email : '',
        password : '',
        r_password : '',
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(prevStat =>({
            ...prevStat,
            [name] : value,
        }));
    }

    const [passwordsNotMatch,setPasswordsNotMatch] = useState(false); 

    const insertSt = async () =>{
        setLoading(true);
        const response = await insertStudent(formData);
        console.log(response.data);
        
        setLoading(false);
        if(response.data.usernameExists){
            setUsernameExist(true);
        }else if(response.data.inserted){
            setInserted(true);
        }
    }

    const insertTe = async () =>{
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(user === 'Student'){
            if(formData.password !== formData.r_password){
                setPasswordsNotMatch(true);
            }else{
                insertSt();                
            }
        }
        // if(user === 'Teacher'){
            // if(formData.password !== formData.r_password){
            //     setPasswordsNotMatch(true);
            // }else{
            // insertTe();
            // }
        // }
    }
return (
    <div>
        <div
            className="fixed overflow-auto inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
            aria-hidden="true"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative dark:bg-gray-800 text-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibol">
                    Add new {user}
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
                                placeholder="Full name" 
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"
                                required
                                />
                            </div>
                            <div className="w-[48%]">
                                <label>Username</label><br></br>
                                <input type="text" 
                                placeholder="Username" 
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>
                        
                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Date of birth</label><br></br>
                                <input type="date" 
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                                className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Phone number</label><br></br>
                                <input type="text" 
                                placeholder="Phone number" 
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                                className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>City</label><br></br>
                                <input type="text" 
                                placeholder="City" 
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Adress</label><br></br>
                                <input type="text" 
                                placeholder="Adress" 
                                name="adress"
                                value={formData.adress}
                                onChange={handleChange}
                                required
                                className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                {
                                    user === 'Student' && (
                                        <>
                                            <label>Grade</label><br></br>
                                            <select className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"
                                            name="grade" required onChange={handleChange}>
                                                <option value="">Select grade</option>
                                                <option value="TC">TC</option>
                                                <option value="1BAC">1BAC</option>
                                                <option value="2BAC">2BAC</option>
                                            </select>
                                        </>
                                    )
                                }
                                {
                                    user === 'Teacher' && (
                                        <>
                                            <label>Subject</label><br></br>
                                            <select className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"
                                            name="subject" required onChange={handleChange}>
                                                <option value="">Select Subject</option>
                                                <option value="Maths">Maths</option>
                                                <option value="Phisics">Phisics</option>
                                                <option value="English">English</option>
                                            </select>
                                        </>
                                    )
                                }
                            </div>
                            <div className="w-[48%]">
                                <label>Gender</label><br></br>
                                <input type='radio' 
                                name="gender" 
                                id="male"
                                value="Male"
                                required
                                onChange={handleChange}/><label className="cursor-pointer mr-5" htmlFor="male">Male</label>
                                <input type='radio' 
                                name="gender" 
                                id="female"
                                required
                                value={"Female"}
                                onChange={handleChange}/><label className="cursor-pointer" htmlFor="female">Female</label>
                            </div>
                        </div>

                        <div>
                            <label>Email adress</label><br></br>
                            <input type="text" 
                            placeholder="Email adress"
                            name="email"
                            value={formData.email}
                            required
                            onChange={handleChange} 
                            className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                        </div>
                        
                        {
                            user === 'Teacher' && (
                                <>
                                    <label>Salary</label>
                                    <input type="number" 
                                    placeholder="Salary" 
                                    name="salary"
                                    value={formData.salary}
                                    required
                                    onChange={handleChange} 
                                    className="dark:bg-gray-700 px-3 py-2 border border-gray-500 rounded-md"/>
                                </>
                            )
                        }

                        <div className="flex justify-between">
                            <div className="w-[48%]">
                                <label>Password</label><br></br>
                                <input type="password" 
                                placeholder="Password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange} 
                                required
                                className="dark:bg-gray-700 px-3 py-2 w-[100%] border border-gray-500 rounded-md"/>
                            </div>
                            <div className="w-[48%]">
                                <label>Confirm password</label><br></br>
                                <input type="password" 
                                placeholder="Confirm password" 
                                name="r_password"
                                value={formData.r_password}
                                onChange={handleChange} 
                                required
                                className="dark:bg-gray-700 px-3 w-[100%] py-2 border border-gray-500 rounded-md"/>
                            </div>
                        </div>
                        {
                            passwordsNotMatch && <span className="text-red-500 text-sm">Paswords not match!</span>
                        }
                        <div className="flex items-center p-2 md:p-2 justify-end">
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-1 w-[20%] rounded-sm"
                            >
                                {   
                                loading ? 
                                    <CircularProgress size={"18px"} color="white"/>
                                    : "Edit"
                                }
                            </button>
                        </div>
                        {
                            inserted && (
                                <Snackbar open={open} className="bg-green-600 rounded-md text-white cursor-pointer" 
                                    autoHideDuration={6000} onClick={() => setOpen(false)}>
                                        <Alert
                                            severity="success"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                        Inserted successfully !
                                        </Alert>
                                </Snackbar>
                            )
                        }
                        {
                            usernameExist && (
                                <Snackbar open={open} className="bg-green-600 rounded-md text-white cursor-pointer" 
                                    autoHideDuration={6000} onClick={() => setOpen(false)}>
                                        <Alert
                                            severity="error"
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                        This user name is alredy exist!
                                        </Alert>
                                </Snackbar>
                            )
                        }
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
