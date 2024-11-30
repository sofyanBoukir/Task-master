import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/auth/Login"
import { SignUp } from "./pages/auth/SignUp"
import { ForgotPassword } from "./pages/auth/ForgotPassword"
import { Dashboard } from "./pages/main/Dashboard"
import { ProtectedRoutes } from "./Routes/Routes"
import { ResetPassword } from "./pages/auth/ResetPassword"
import { Tasks } from "./pages/main/Tasks"
import { CompletedTasks } from "./pages/main/CompletedTasks"
import { DeletedTasks } from "./pages/main/DeletedTasks"
import { SavedTasks } from "./pages/main/SavedTasks"
import { AddTasks } from "./pages/main/AddTasks"
import { legacy_createStore } from "redux"
import { TaskReducer } from "./redux/reduce/SavedTasks"
import { Provider } from "react-redux"

const TaskStore = legacy_createStore(TaskReducer);

export const App = () => {
  return (
    <Provider store={TaskStore}>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<SignUp />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/main/dashboard" element={<Dashboard />}/>
          <Route path="/main/addTasks" element={<AddTasks />} />
          <Route path="/main/tasks" element={<Tasks />} />
          <Route path="/main/completed" element={<CompletedTasks />} />
          <Route path="/main/deleted" element={<DeletedTasks />} />
            <Route path="/main/saved" element={<SavedTasks />} />
        </Route>
      </Routes>
    </Provider>
  )
}