import Lottie from "lottie-react";
import errorJson from "../../assets/404.json"
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const Error = () => {
    return (
        <div className="w-[70%] mx-auto flex flex-col items-center">
            <Lottie animationData={errorJson} loop={true} />
            <NavLink to={"/"} className={"-mt-20"}><Button type="primary" className="bg-[#262626] hover:!bg-[#262626]">Go TO Home</Button></NavLink>
        </div>
    );
};

export default Error;