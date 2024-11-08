
import { Routes,Route } from "react-router-dom"
import { SignIn } from "./pages/auth/SignIn"
import AdminRoutes from "./ProtectedRoutes/AdminRoutes"
import { AdminDashboard } from "./pages/admin/AdminDashboard"

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />          
          </Route>
      </Routes>
  )
}
