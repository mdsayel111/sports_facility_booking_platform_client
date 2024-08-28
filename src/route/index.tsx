import Greeting from "../components/dashboard/greeting/Greeting";
import AboutUs from "../pages/about-us/AboutUs";
import AddFacility from "../pages/add-facility/AddFacility";
import BookingManagement from "../pages/booking-management/BookingManagement";
import ContactUs from "../pages/contsct-us/ContactUs";
import CreateAdminAccount from "../pages/create-admin-account/CreateAdminAccount";
import Dashboard from "../pages/dashboard/Dashboard";
import FacilityBooking from "../pages/facility-booking/FacilityBooking";
import FacilityDetails from "../pages/facility-details/FacilityDetails";
import FacilityManagement from "../pages/facility-management/FacilityManagement";
import Facility from "../pages/facility/Facility";
import Home from "../pages/home/Home";
import UpdateFacility from "../pages/update-facility/UpdateFacility";
import { TRoute } from "../type/route-type";

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
        path: "/facility/:id",
        element: <FacilityDetails />
    },
    {
        path: "/facility/booking/:id",
        element: <FacilityBooking />
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
        element: <UpdateFacility />
    },
    {
        path: "/add-facility",
        element: <AddFacility />
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                path: "/dashboard/facility-management",
                element: <Greeting />
            },
            {

                path: "/dashboard/facility-management",
                name: "Facility-Management",
                element: <FacilityManagement />
            },
            {

                path: "/dashboard/booking-management",
                name: "Booking-Management",
                element: <BookingManagement />
            },
            {

                path: "/dashboard/create-admin-account",
                name: "Create Admin account",
                element: <CreateAdminAccount />
            },
        ]
    },
]

export default route