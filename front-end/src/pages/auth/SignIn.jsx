import { Link } from "react-router-dom"
import { AcademicCapIcon,BriefcaseIcon,UserIcon } from '@heroicons/react/24/outline'
import { useRef } from "react"

export const SignIn = () => {

  const username = useRef();
  const password = useRef();

  const errorHandling = () =>{
    let errors = {};
    if(username.current.value === ''){
      errors.username = 'THis filed is required';
    }
    if(password.current.value === ''){
      errors.password = 'This filed is required';
    }

    return errors.length === 0;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(errorHandling()){
      console.log("Data sended"); 
    }
  }

  return (
    <div className="px-3 py-5 mt-10 mx-auto w-[30%] border-2 border-black rounded-lg">
        <h2 className="text-3xl font-semibold text-center">Welcome back</h2>
        <p className="text-center font-semibold">Hey, Complete this fileds to get sign in!</p>
        <div className="flex gap-2 justify-center mt-4">
            <div className="border border-black rounded-sm px-3 py-2 text-center cursor-pointer">
              <AcademicCapIcon className="mx-auto w-10 h-10" />
              <span className="font-semibold">Student</span> 
            </div>
            <div className="border border-black rounded-sm px-3 py-2 text-center cursor-pointer">
              <BriefcaseIcon className="mx-auto w-10 h-10" />
              <span className="font-semibold">Teacher</span> 
            </div>
            <div className="border border-black rounded-sm px-3 py-2 text-center cursor-pointer">
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
                className="rounded-sm border border-1 border-gray-400 px-2 py-1 w-[100%]" />
                <br></br>
                <br></br>
                <label className="text-gray-600 font-semibold">Password</label>
                <br></br>
                <input type="password"
                placeholder="password"
                ref={password}
                className="rounded-sm border border-1 border-gray-400 px-2 py-1 w-[100%]" />
                <br></br>
                <Link to={""} className="flex justify-end cursor-pointer font-semibold text-blue-700 underline text-sm">Forgot password</Link>
                <br></br>
                <input type="submit"
                value={"Sign in"}
                className="text-lg bg-blue-600 text-white py-1 rounded-lg cursor-pointer hover:bg-blue-700 w-[100%] text-semibold"
                />
            </form>
        </div>
    </div>
  )
}
