import { createContext, useState } from "react"
import { userLogout } from "../services/authService";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isLoggedOut,setIsLoggedOut] = useState(false);

    const [user,setUser] = useState(() =>{
      return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem("userData")) : null;
    });
    
    const updateUser = (userData) =>{      
      localStorage.removeItem("userData");
      localStorage.setItem("userData",JSON.stringify(userData));
      setUser(userData)
    }

    const register = (userData) =>{
      localStorage.setItem("userData", JSON.stringify(userData));      
    }

    const logout = async () =>{
      const response = await userLogout();
      if(response.data.loggedOut){
        setUser(null);
        setIsLoggedOut(true);
        localStorage.clear();
      }
    }

  return (
    <AuthContext.Provider value={{user,register,logout,isLoggedOut,updateUser}}>
        {children}
    </AuthContext.Provider>
  )
}
