import { Link, useNavigate } from "react-router-dom"
import { AcademicCapIcon,BriefcaseIcon,UserIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from "react"
import { login } from "../../services/authService";
import { CircularProgress } from "@mui/material";

export const SignIn = () => {

  const username = useRef();
  const password = useRef();
  const [formErrors,setFormErrors] = useState({});
  const [role,setRole] = useState('student');
  const [invalidCredentials,setInvalidCredentials] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  
  const errorHandling = () =>{
    let errors = {};
    if(username.current.value === ''){
      errors.username = 'This filed is required';
    }
    if(password.current.value === ''){
      errors.password = 'This filed is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    if(errorHandling()){
      setLoading(true);
      let data = {
        username : username.current.value,
        password : password.current.value,
        role : role,
      }

      let response = await login(data);
      
      setLoading(false);

      if(response && response.status === 200){

        localStorage.setItem('isAuthenticated','true');

        if(response.data.role === 'student'){
          localStorage.setItem('role','student');
          navigate("/student/dashboard");
        }else if(response.data.role === 'teacher'){
          localStorage.setItem('role','teacher');
          navigate("/teacher/dashboard");
        }else if(response.data.role === 'admin'){
          localStorage.setItem('role','admin');          
          navigate("/admin/dashboard");
        }

        const userId = response.data.user.id;        
        localStorage.setItem('userId',userId);

      }else{
        setInvalidCredentials("Username or password incorrect");
      }
      
    }
  }

  return (
    <div className="px-3 py-5 mt-10 mx-auto w-[80%] border-2 border-black rounded-lg lg:w-[30%]">
        <h2 className="text-3xl font-semibold text-center">Welcome back</h2>
        <p className="text-center font-semibold">Hey, Complete this fileds to get sign in!</p>

        <div className="flex gap-2 justify-center mt-4">
            <div className={`${role === "student" ? "bg-blue-600 text-white border-none": null} 
            border border-black rounded-sm px-3 py-2 text-center cursor-pointer`} onClick={() => setRole("student")}>
              <AcademicCapIcon className="mx-auto w-10 h-10" />
              <span className="font-semibold">Student</span> 
            </div>

            <div className={`${role === "teacher" ? "bg-blue-600 text-white border-none": null}
             border border-black rounded-sm px-3 py-2 text-center cursor-pointer`} onClick={() => setRole("teacher")}>
              <BriefcaseIcon className="mx-auto w-10 h-10" />
              <span className="font-semibold">Teacher</span> 
            </div>

            <div className={`${role === "admin" ? "bg-blue-600 text-white border-none": null} 
            border border-black rounded-sm px-3 py-2 text-center cursor-pointer`} onClick={() => setRole("admin")}>
              <UserIcon className="mx-auto w-10 h-10" />
              <span className="font-semibold">Admin</span> 
            </div>
        </div>

        <div className="px-3 mt-4">
            <form onSubmit={handleSubmit}>
                <label className="text-gray-600 font-semibold">Username</label>
                <br></br>
                <input type="text"
                placeholder="username"
                ref={username}
                className="rounded-sm border border-1 border-gray-500 px-2 py-1 w-[100%] outline-none" />
                <br></br>
                {
                  formErrors.username && <span className="text-red-700 text-sm">{formErrors.username}</span>
                }
                {
                  invalidCredentials && <span className="text-red-700 text-sm">{invalidCredentials}</span>
                }
                <br></br>
                <label className="text-gray-600 font-semibold">Password</label>
                <br></br>
                <input type="password"
                placeholder="password"
                ref={password}
                className="rounded-sm border border-1 border-gray-500 px-2 py-1 w-[100%] outline-none" />
                <br></br>
                {
                  formErrors.username && <span className="text-red-700 text-sm">{formErrors.username}</span>
                }
                <Link to={""} className="flex justify-end cursor-pointer font-semibold text-blue-700 underline text-sm">Forgot password</Link>
                <br></br>
                <button disabled={loading} className={`${loading?'bg-blue-400 hover:bg-blue-400 cursor-no-drop':null} text-lg gap-3 flex items-center justify-center  bg-blue-600 text-white py-1 rounded-lg cursor-pointer hover:bg-blue-700 w-[100%]`} type="submit">
                  {
                    loading? 
                        <CircularProgress size={"20px"} color="white" className="my-1"/>
                    : <span>Continue</span>
                  }
                </button>
            </form>
        </div>
    </div>
  )
}
