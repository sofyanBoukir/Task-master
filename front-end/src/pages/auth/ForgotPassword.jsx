import { Link } from "react-router-dom"
import { Label } from "../../components/UI/Label"
import { Input } from "../../components/UI/input"
import { Button } from "../../components/UI/Button"

export const ForgotPassword = () => {
  return (
    <div className="lg:w-[35%] w-[90%] mx-auto px-10 py-5 text-center shadow-md rounded-md bg-white border-black mt-20">
        <h1 className="text-xl font-semibold">Forgot password</h1>

        <div className="flex justify-start mt-5">
            <form className="w-[100%]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <Label text={"Enter the email associed with your account"}/>
                        <Input type={"email"} width={'80%'} placeholder={"Ex: test01@gmail.com"} name={"email"} />
                    </div>
                </div>
                <br></br>
                <Button text={"Reset password"} bg={"bg-blue-600"} width={"100%"}/>
            </form>
        </div>
    </div>
  )
}
