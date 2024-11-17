import { createContext, useState } from "react"

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isLoggedOut,setIsLoggedOut] = useState(false);
    const [user,setUser] = useState(() =>{
      return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem("userData")) : null;
    });
  
    const register = (userData) =>{
      localStorage.setItem("userData", JSON.stringify(userData));      
    }

    const logout = () =>{
      setUser(null);
      setIsLoggedOut(true);
      localStorage.clear();
    }

  return (
    <AuthContext.Provider value={{user,register,logout,isLoggedOut}}>
        {children}
    </AuthContext.Provider>
  )
}
