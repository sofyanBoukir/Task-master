import { useState } from "react"
import { Button } from "../../components/UI/Button"
import { Input } from "../../components/UI/input"
import { Label } from "../../components/UI/Label"
import { verifyCode } from "../../services/authService"
import { Notification } from "../../components/UI/Notification"
import { LinearLoading } from "../../components/UI/LinearLoading"

export const Verification = ({full_name,email,password}) => {

    const [formData,setFormData] = useState({
        full_name : full_name,
        email : email,
        password : password,
        verificationCode : '',
    })
    const [loading,setLoading] = useState(false);
    const [incorrectCode,setIncorrectCode] = useState(false);
    const [success,setSuccess] = useState(true);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) =>{
        setIncorrectCode(false);
        e.preventDefault();
        setLoading(true);
        const response = await verifyCode(formData);
        setLoading(false);
        
        if(response.data.incorrect_code){
            setIncorrectCode(true);
        }else if(response.data.registred){
            setSuccess(true);
        }
    }
  return (
    <div>
        <h1 className="text-xl font-semibold">Verification code</h1>
        <span className="mt-2 text-gray-500 text-sm font-semibold">A verification code sent to <span className="text-blue-700" to={"/"}>{email}</span></span>

        <div className="flex justify-start mt-5">
            <form className="w-[100%]" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <Label text={"Full name"}/>
                        <Input type={"number"} width={'80%'} placeholder={"Ex: 892842"} name={"verificationCode"} size={"6"} value={formData.verificationCode} onChange={handleChange}/>
                    </div>
                </div>
                <br></br>
                <Button text={"Verify now"} bg={"bg-blue-600"} width={"100%"} loading={loading}/>
            </form>
            {
                incorrectCode && <Notification kind={"error"} message={"The code entered is wrong!"}/>
            }
            {
                success && <LinearLoading />
            }
        </div>
    </div>
  )
}
