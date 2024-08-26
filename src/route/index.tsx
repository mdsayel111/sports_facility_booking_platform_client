import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contsct-us/ContactUs";
import Dashboard from "../pages/dashboard/Dashboard";
import FacilityBooking from "../pages/facility-booking/FacilityBooking";
import FacilityDetails from "../pages/facility-details/FacilityDetails";
import Facility from "../pages/facility/Facility";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyBooking from "../pages/my-booking/MyBooking";
import SignUp from "../pages/signup/SignUp";
import { TRoute } from "../type/route-type";

// create route for genarate route and navigation
const route: TRoute[] = [
    {
        name: "home",
        path: "/",
        index: true,
        element: <Home />
    },
    {
        name: "facility",
        path: "/facility",
        element: <Facility />
    },
    {
        name: "facility-details",
        path: "/facility/:id",
        element: <FacilityDetails />
    },
    {
        name: "booking",
        path: "/facility/booking/:id",
        element: <FacilityBooking />
    },
    {
        name: "about-us",
        path: "/about-us",
        element: <AboutUs />
    },
    {
        name: "contact-us",
        path: "/contact-us",
        element: <ContactUs />
    },
    {
        name: "dashboard",
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                path: "/dashboard/my-booking",
                name: "my-booking",
                element: <MyBooking />
            }
        ]
    },
    {
        name: "login",
        path: "/login",
        element: <Login />
    },
    {
        name: "signup",
        path: "/login",
        element: <SignUp />
    },
]
export default route