import { Link } from "react-router-dom"
import { Label } from "../../components/UI/Label"
import { Input } from "../../components/UI/input"
import { Button } from "../../components/UI/Button"
import { useState } from "react"

export const Login = () => {

    const [formData,setFormData] = useState({
        email : '',
        password : '',
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
  return (
    <div className="lg:w-[35%] w-[90%] mx-auto px-10 py-5 text-center shadow-md rounded-md bg-white border-black mt-20">
        <h1 className="text-xl font-semibold">Login to your account</h1>
        <span className="mt-2 text-gray-500 text-sm font-semibold">Login now. Don't have an account? <Link className="text-blue-700" to={"/Register"}>Sign up</Link></span>

        <div className="flex justify-start mt-5">
            <form className="w-[100%]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <Label text={"Email"}/>
                        <Input type={"email"} width={'80%'} placeholder={"Ex: test01@gmail.com"} name={"email"} value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label text={"Password"}/>
                        <Input type={"password"} width={'80%'} placeholder={"●●●●●●●●●●"} name={"password"} value={formData.password} onChange={handleChange}/>
                    </div>
                </div>
                <span className="text-blue-600 flex justify-end text-xs font-semibold"><Link to={"/forgot"}>Forgot password?</Link></span>
                <br></br>
                <Button text={"Login now"} bg={"bg-blue-600"} width={"100%"}/>
            </form>
        </div>
    </div>
  )
}
