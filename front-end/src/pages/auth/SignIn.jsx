import { Link, useNavigate } from "react-router-dom"
import { AcademicCapIcon,BriefcaseIcon,UserIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from "react"
import { login } from "../../services/authService";

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
                <button disabled={loading} className={`${loading? 'bg-blue-500 hover:bg-blue-500 cursor-not-allowed':null} text-lg gap-3 flex items-center justify-center  bg-blue-600 text-white py-1 rounded-lg cursor-pointer hover:bg-blue-700 w-[100%]`} type="submit">
                  {
                    loading? <div className='flex gap-1 items-center'>
                        <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="text-lg">...loading</span>
                    </div>
                    : <span>Continue</span>
                  }
                </button>
            </form>
        </div>
    </div>
  )
}
