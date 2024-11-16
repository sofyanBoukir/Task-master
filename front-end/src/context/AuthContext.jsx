import { createContext, useState } from "react"

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(() =>{
      return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem("userData")) : null;
    });
  
    const register = (userData) =>{
      localStorage.setItem("userData", JSON.stringify(userData));      
    }

    const logout = () =>{
      setUser(null);
    }

  return (
    <AuthContext.Provider value={{user,register,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
