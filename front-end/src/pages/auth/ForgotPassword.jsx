import { Label } from "../../components/UI/Label"
import { Input } from "../../components/UI/input"
import { Button } from "../../components/UI/Button"
import { useState } from "react"
import { forgotPassword } from "../../services/authService"
import { NormalNotification } from "../../components/UI/NormalNotification"
import { Notification } from "../../components/UI/Notification"

export const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    const [userNotExists,setUserNotExists] = useState(false);
    const [linkSended,setLinkSended] = useState(null);
    const [message,setMessage] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setUserNotExists(null);
        setLinkSended(null);
        setLoading(true);
        let formData = new FormData();
        formData.append("email",email);
        const response = await forgotPassword(formData);
        console.log(response);
        
        setLoading(false);
        if(response.data.userNotExist){
            setUserNotExists(true);
        }
        else if(response.data.sended){
            setLinkSended(true);
            setMessage(response.data.message)
        }else{
            setLinkSended(false);
            setMessage(response.data.message)
        }
    }
  return (
    <div className="lg:w-[35%] w-[90%] mx-auto px-10 py-5 text-center shadow-md rounded-md bg-white border-black mt-20">
        <h1 className="text-xl font-semibold">Forgot password</h1>

        <div className="flex justify-start mt-5">
            <form className="w-[100%]" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <Label text={"Enter the email associed with your account"}/>
                        <Input type={"email"} width={'80%'} placeholder={"Ex: test01@gmail.com"} name={"email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <br></br>
                <Button text={"Reset password"} loading={loading} bg={"bg-blue-600"} width={"100%"}/>
            </form>
        </div>
        {
            userNotExists && <NormalNotification message={"This user with this email is not exist!"} />
        }
        {
            linkSended && <Notification message={message} kind={"success"}/>
        }
        {
            linkSended === false && <Notification message={message} kind={"error"}/>
        }
    </div>
  )
}
