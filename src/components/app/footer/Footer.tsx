import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-secondary rounded-t-xl">
            
            <footer className=" lg:w-[90%] w-[95%] mx-auto">
                <div className="w-full mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="/logo2.png" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">SportsEase</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-black">
                            <li>
                                <NavLink to={"/about-us"} className="hover:underline me-4 md:me-6 hover:text-primary text-white">About</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:underline me-4 md:me-6 hover:text-primary text-white">Privacy Policy</NavLink>
                            </li>
                            <li>
                                <NavLink to={""} className="hover:underline me-4 md:me-6 hover:text-primary text-white">Licensing</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact-us"} className="hover:underline hover:text-primary text-white">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm  sm:text-center text-white">© 2023 <span className="text-primary">SportsEase</span>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;