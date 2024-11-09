import { Navigate, Outlet } from "react-router-dom";

const useAuth = () =>{
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("role");

    return isAuthenticated === 'true' && role === 'teacher';
}

const TeacherRoutes = () =>{
    const isTeacherAUth = useAuth();
    return isTeacherAUth ? <Outlet /> : <Navigate to={"/"} />;
}

export default TeacherRoutes;