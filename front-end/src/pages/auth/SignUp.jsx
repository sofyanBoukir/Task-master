import { Link } from "react-router-dom"
import { Label } from "../../components/UI/Label"
import { Input } from "../../components/UI/input"
import { Button } from "../../components/UI/Button"
import { useState } from "react"
import { Verification } from "./Verification"
import { sendVerifyCode } from "../../services/authService"
import { NormalNotification } from "../../components/UI/NormalNotification"

export const SignUp = () => {
    const [formData,setFormData] = useState({
        full_name : '',
        email : '',
        password : '',
    });

    const [isCodeSent,setIsCodeSent] = useState(false);
    const [loading,setLoading] = useState(false);
    const [userExists,setUserExists] = useState(false);

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) =>{
        setUserExists(false);
        e.preventDefault();
        setLoading(true);
        const response = await sendVerifyCode(formData);
        setLoading(false);
        console.log(response);
        
        if(response.data.code_sended){
            setIsCodeSent(true);
        }
        if(response.data.user_exists){
            setUserExists(true);
        }
    }   


  return (
    <div className="lg:w-[35%] w-[90%] mx-auto px-10 py-5 text-center shadow-md rounded-md bg-white border-black mt-20">
        {
            !isCodeSent ?<>
                <h1 className="text-xl font-semibold">Create an account</h1>
                <span className="mt-2 text-gray-500 text-sm font-semibold">Already have an account? <Link className="text-blue-700" to={"/"}>Sign in</Link></span>

                <div className="flex justify-start mt-5">
                    <form className="w-[100%]" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <Label text={"Full name"}/>
                                <Input type={"text"} width={'80%'} placeholder={"Ex: John doe"} name={"full_name"} value={formData.full_name} onChange={handleChange}/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <Label text={"Email"}/>
                                <Input type={"email"} width={'80%'} placeholder={"Ex: test01@gmail.com"} name={"email"} value={formData.email} onChange={handleChange}/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <Label text={"Password"}/>
                                <Input type={"password"} width={'80%'} placeholder={"●●●●●●●●●●"} name={"password"} value={formData.password} onChange={handleChange}/>
                            </div>
                        </div>
                        <br></br>
                        <Button text={"Register now"} bg={"bg-blue-600"} width={"100%"} loading={loading}/>
                    </form>
                </div>
            </>
            :
            <Verification full_name={formData.full_name}
            email={formData.email}
            password={formData.password}/>
        }
        {
            userExists && <NormalNotification message={"You are already a member! try to login"}/>
        }
    </div>
  )
}
