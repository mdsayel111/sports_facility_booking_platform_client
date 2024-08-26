import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>

            <section className="bg-white shadow-xl  rounded-xl">
                <div className="flex mx-auto lg:gap-4 xl:gap-0 p-8 flex-col lg:flex-row">
                    <div className="mr-auto place-self-center lg:w-[40%] w-full">
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-primary">
                            Booking Sports Spaces <br /> & Experiences.
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Book sports facilities easily with SportsEase. Find the perfect venue with real-time availability and a simple, user-friendly interface.
                        </p>

                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                            <NavLink to={"/facility"} target="_blank"
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm text-white bg-primary border border-gray-200 rounded-lg sm:w-auto focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700    dark:hover:text-white dark:hover:bg-gray-700 font-bold">
                                BOOK NOW
                            </NavLink>

                        </div>
                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:w-[40%] w-full">
                        <img src="/banner.png" alt="hero image" className="w-full h-[400px]" />
                    </div>

                </div>
            </section >
        </div >
    );
};

export default Banner;