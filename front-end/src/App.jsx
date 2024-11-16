import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { SignUp } from "./pages/auth/SignUp"
import { ForgotPassword } from "./pages/auth/ForgotPassword"
import { Dashboard } from "./pages/main/Dashboard"
import { ProtectedRoutes } from "./Routes/Routes"
import { ResetPassword } from "./pages/auth/ResetPassword"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Register" element={<SignUp />} />
      <Route path="/Forgot" element={<ForgotPassword />} />
      <Route path="/password-reset/:token" element={<ResetPassword />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/main/dashboard" element={<Dashboard />}/>
      </Route>
    </Routes>
  )
}