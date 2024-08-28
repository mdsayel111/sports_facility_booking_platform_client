import FacilityManagement from "../../../pages/facility-management/FacilityManagement";
import MyBooking from "../../../pages/my-booking/MyBooking";
import { useAppSelector } from "../../../redux/hooks";
import { selectAuth } from "../../../redux/slices/auth-slice";

const DashboardIndex = () => {
    const auth = useAppSelector(selectAuth)
    if (!auth.userData.role) {
        return <></>
    }
    return (
        <div>
            {
                auth.userData.role === "admin" ? <FacilityManagement /> : <MyBooking />
            }
        </div>
    );
};

export default DashboardIndex;