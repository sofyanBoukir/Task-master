import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { SignUp } from "./pages/auth/SignUp"
import { ForgotPassword } from "./pages/auth/ForgotPassword"
import { Dashboard } from "./pages/main/Dashboard"
import { ProtectedRoutes } from "./Routes/Routes"
import { ResetPassword } from "./pages/auth/ResetPassword"
import { Tasks } from "./pages/main/Tasks"
import { DeletedTasks } from "./pages/main/DeletedTasks"
import { SavedTasks } from "./pages/main/SavedTasks"
import { AddTasks } from "./pages/main/AddTasks"
import store from "./redux/reduce/store/store"
import { Provider } from "react-redux"
import { ProjectsWith } from "./pages/main/ProjectsWith"
import { AssignedTasks } from "./pages/main/AssignedTasks"


export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<SignUp />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/main/dashboard" element={<Dashboard />}/>
          <Route path="/main/addTasks" element={<AddTasks />} />
          <Route path="/main/tasks" element={<Tasks />} />
          <Route path="/main/assignedTasks" element={<AssignedTasks />} />
          <Route path="/main/projectsWith" element={<ProjectsWith />} />
          <Route path="/main/deleted" element={<DeletedTasks />} />
          <Route path="/main/saved" element={<SavedTasks />} />
        </Route>
      </Routes>
    </Provider>
  )
}