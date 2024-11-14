import { Link } from "react-router-dom"
import { Label } from "../../components/UI/Label"
import { Input } from "../../components/UI/input"
import { Button } from "../../components/UI/Button"

export const SignUp = () => {
  return (
    <div className="lg:w-[35%] w-[90%] mx-auto px-10 py-5 text-center shadow-md rounded-md bg-white border-black mt-20">
        <h1 className="text-xl font-semibold">Create an account</h1>
        <span className="mt-2 text-gray-500 text-sm font-semibold">Already have an account? <Link className="text-blue-700" to={"/"}>Sign in</Link></span>

        <div className="flex justify-start mt-5">
            <form className="w-[100%]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <Label text={"Full name"}/>
                        <Input type={"text"} width={'80%'} placeholder={"Ex: John doe"} name={"text"} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label text={"Email"}/>
                        <Input type={"text"} width={'80%'} placeholder={"Ex: test01@gmail.com"} name={"email"} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label text={"Password"}/>
                        <Input type={"password"} width={'80%'} placeholder={"●●●●●●●●●●"} name={"password"} />
                    </div>
                </div>
                <br></br>
                <Button text={"Register now"} bg={"bg-blue-600"} width={"100%"}/>
            </form>
        </div>
    </div>
  )
}
