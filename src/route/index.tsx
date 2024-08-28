import Greeting from "../components/dashboard/greeting/Greeting";
import AboutUs from "../pages/about-us/AboutUs";
import AddFacility from "../pages/add-facility/AddFacility";
import BookingDetails from "../pages/booking-details/BookingDetails";
import BookingManagement from "../pages/booking-management/BookingManagement";
import ContactUs from "../pages/contsct-us/ContactUs";
import CreateAdminAccount from "../pages/create-admin-account/CreateAdminAccount";
import Dashboard from "../pages/dashboard/Dashboard";
import FacilityBooking from "../pages/facility-booking/FacilityBooking";
import FacilityDetails from "../pages/facility-details/FacilityDetails";
import FacilityManagement from "../pages/facility-management/FacilityManagement";
import Facility from "../pages/facility/Facility";
import Home from "../pages/home/Home";
import MyBooking from "../pages/my-booking/MyBooking";
import UpdateFacility from "../pages/update-facility/UpdateFacility";
import { TRoute } from "../type/route-type";
import ProtectedRouteWraper from "../wraper/ProtectedRouteWraper";

// create route for genarate route and navigation
const route: TRoute[] = [
    {
        name: "Home",
        path: "/",
        index: true,
        element: <Home />
    },
    {
        name: "Facility",
        path: "/facility",
        element: <Facility />
    },
    {
        path: "/facility-details/:id",
        element: <FacilityDetails />
    },
    {
        path: "/facility-booking/:id",
        element: <ProtectedRouteWraper role={["user"]}><FacilityBooking /></ProtectedRouteWraper>
    },
    {
        name: "About-Us",
        path: "/about-us",
        element: <AboutUs />
    },
    {
        name: "Contact-Us",
        path: "/contact-us",
        element: <ContactUs />
    },
    {
        path: "/update-facility/:id",
        element: <ProtectedRouteWraper role={["admin"]}><UpdateFacility /></ProtectedRouteWraper>
    },
    {
        path: "/add-facility",
        element: <ProtectedRouteWraper role={["admin"]}><AddFacility /></ProtectedRouteWraper>
    },
    {
        path: "/booking-details/:id",
        element: <ProtectedRouteWraper role={["user"]}><BookingDetails /></ProtectedRouteWraper>
    },

    // dashboard
    {
        name: "Dashboard",
        path: "/dashboard",
        element: <ProtectedRouteWraper role={["user", "admin"]}><Dashboard /></ProtectedRouteWraper>,
        // dashboard sub menu
        children: [
            {
                index: true,
                path: "/dashboard",
                element: <Greeting />
            },
            // admin route
            {

                path: "/dashboard/facility-management",
                name: "Facility-Management",
                element: <ProtectedRouteWraper role={['admin']}><FacilityManagement /></ProtectedRouteWraper>
            },
            {

                path: "/dashboard/create-admin-account",
                name: "Create-Admin-Account",
                element: <ProtectedRouteWraper role={["admin"]}><CreateAdminAccount /></ProtectedRouteWraper>
            },
            {

                path: "/dashboard/booking-management",
                name: "Booking-Management",
                element: <ProtectedRouteWraper role={["admin"]}><BookingManagement /></ProtectedRouteWraper>
            },
            // user route
            {

                path: "/dashboard/my-booking",
                name: "My-Booking",
                element: <ProtectedRouteWraper role={["user"]}><MyBooking /></ProtectedRouteWraper>
            },

        ]
    },
]

export default route