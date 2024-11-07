
import { Routes,Route } from "react-router-dom"
import { SignIn } from "./pages/auth/SignIn"

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
  )
}
