import { Navigate, Outlet } from "react-router-dom";

const useAuth = () =>{
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const role = localStorage.getItem("role");

    return isAuthenticated === 'true' && role === 'student';
}

const StudentRoutes = () =>{
    const isStudentAuth = useAuth();
    return isStudentAuth ? <Outlet /> : <Navigate to={"/"} />;
}

export default StudentRoutes;