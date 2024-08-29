import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectAuth } from "../redux/slices/auth-slice";
import { ReactNode } from "react";
import toast from "react-hot-toast";
type TProtectedRouteWraper = { role: ("admin" | "user")[], children: ReactNode }

const ProtectedRouteWraper = ({ role, children }: TProtectedRouteWraper) => {

    const auth = useAppSelector(selectAuth)

    if (!role.includes(auth.userData.role as ("user" | "admin"))) {
        toast.error(`${auth.userData.role} is not authorized to this route!`)
        return (auth.userData.role ? <Navigate to={"/"} replace /> : <Navigate to={"/login"} replace />)
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRouteWraper;