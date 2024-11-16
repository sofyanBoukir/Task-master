import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Label } from "../../components/UI/Label";
import { useState } from "react";
import { Input } from "../../components/UI/input";
import { Button } from "../../components/UI/Button";
import { Notification } from "../../components/UI/Notification";
import { resetPassword } from "../../services/authService";
import { LinearLoading } from "../../components/UI/LinearLoading";

export const ResetPassword = () => {
  const {token} = useParams();

  const location = useLocation();
  const emailSearch = new URLSearchParams(location.search);
  const email = emailSearch.get("email");
  const [passwordsNotMatch,setPasswordNotMatch] = useState(false);
  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState('');
  const [reseted,setReseted] = useState(null);
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email : email,
    password : '',
    retype_password : '',
    token : token,
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData((prevState)=>({
      ...prevState,
      [name] : value,
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setReseted(null);
    setPasswordNotMatch(false);
    if(formData.password !== formData.retype_password){
      setPasswordNotMatch(true);
    }else{    
      setLoading(true);
      const response = await resetPassword(formData);
      setLoading(false);
      if(response.data.reseted){
        setMessage(response.data.message);
        setReseted(true);
        setTimeout(() => {
          navigate("/");
      }, 3000);
      }else{
        setReseted(false);
        setMessage(response.data.message);
      }
    }
  }
  return (
    <div className="lg:w-[35%] w-[90%] mx-auto px-10 py-5 text-center shadow-md rounded-md bg-white border-black mt-20">
      <h1 className="text-xl font-semibold">Reset your password</h1>
      <span className="mt-2 text-gray-500 text-sm font-semibold">Reset password for <span className="text-blue-700" to={"/Register"}>{email}</span></span>
      <div className="flex justify-start mt-5">
          <form className="w-[100%]" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                      <Label text={"Password"}/>
                      <Input type={"password"} width={'80%'} placeholder={"●●●●●●●●●●"} name={"password"} value={formData.password} onChange={handleChange}/>
                  </div>
                  <div className="flex flex-col gap-1">
                      <Label text={"Retype Password"}/>
                      <Input type={"password"} width={'80%'} placeholder={"●●●●●●●●●●"} name={"retype_password"} value={formData.retype_password} onChange={handleChange}/>
                  </div>
              </div>
              {
                reseted ? 
                  <div className="mt-2">
                    <span className="text-green-700 text-sm">Password reseted! Redirecting to login...</span>
                    <LinearLoading />
                  </div>
                : null
              }
              <br></br>
              <Button loading={loading} text={"Reset your password"} bg={"bg-blue-600"} width={"100%"}/>
          </form>
          {
            passwordsNotMatch && <Notification message={"Passwords not match"} kind={"error"} />
          }
          {
            reseted === false && <Notification message={message} kind={"error"}/>
          }
      </div>
    </div>
  )
}
