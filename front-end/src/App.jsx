
import { Routes,Route } from "react-router-dom"
import { SignIn } from "./pages/auth/SignIn"
import AdminRoutes from "./ProtectedRoutes/AdminRoutes"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import TeacherRoutes from "./ProtectedRoutes/TeacherRoutes"
import StudentRoutes from "./ProtectedRoutes/StudentRoutes"
import { TeacherDashboard } from "./pages/teacher/TeacherDashboard"
import { StudentDashboard } from "./pages/student/StudentDashboard"

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />          
          </Route>

          <Route element={<TeacherRoutes />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          </Route>

          <Route element={<StudentRoutes />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
          </Route>
      </Routes>
  )
}
