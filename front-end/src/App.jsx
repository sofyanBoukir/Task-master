import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { SignUp } from "./pages/auth/SignUp"
import { ForgotPassword } from "./pages/auth/ForgotPassword"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Register" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
    </Routes>
  )
}