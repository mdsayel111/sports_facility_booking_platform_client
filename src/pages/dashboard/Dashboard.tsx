import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="my-10">
            <Outlet />
        </div>
    );
};

export default Dashboard;