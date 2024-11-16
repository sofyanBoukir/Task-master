import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export const Dashboard = () => {
  const {user} = useContext(AuthContext);
    
  return (
    <div>
      Welome {user && user.full_name}
    </div>
  )
}
