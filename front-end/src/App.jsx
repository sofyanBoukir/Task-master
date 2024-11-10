
import { Routes,Route } from "react-router-dom"
import { SignIn } from "./pages/auth/SignIn"
import AdminRoutes from "./ProtectedRoutes/AdminRoutes"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import TeacherRoutes from "./ProtectedRoutes/TeacherRoutes"
import StudentRoutes from "./ProtectedRoutes/StudentRoutes"
import { TeacherDashboard } from "./pages/teacher/TeacherDashboard"
import { StudentDashboard } from "./pages/student/StudentDashboard"
import { AdminProfile } from "./pages/admin/AdminProfile"
import { Students } from "./pages/admin/Students"
import { Teachers } from "./pages/admin/Teachers"
import { Announcement } from "./pages/admin/Announcement"
import { Events } from "./pages/admin/Events"
import { Notifications } from "./pages/admin/Notifications"
import { Team } from "./pages/admin/Team"

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />   
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/students" element={<Students />} />
            <Route path="/admin/teachers" element={<Teachers />} />
            <Route path="/admin/announcement" element={<Announcement />} />
            <Route path="/admin/events" element={<Events />} />
            <Route path="/admin/notifications" element={<Notifications />} />
            <Route path="/admin/team" element={<Team />} />
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
