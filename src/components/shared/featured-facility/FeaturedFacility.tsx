import Title from "../title/Title";

const FeaturedFacility = () => {
    return (
        <div>
            <div>
                <Title title="Featured Facility" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className=" flex justify-center items-center flex-col p-8 shadow-2xl gap-4 rounded-xl">
                        <img src="/featured1.png" alt="" className="h-52 w-52" />
                        <h3 className="text-xl font-bold text-primary">Sports Facility</h3>
                        <p className="text-gray-600">
                            Book your favorite sports facilities easily—connect to top venues, check availability, and secure your spot in just a few clicks.
                        </p>
                    </div>
                    <div className=" flex justify-center items-center flex-col p-8 shadow-2xl gap-4 rounded-xl">
                        <img src="/featured2.jpg" alt="" className="h-52 w-52" />
                        <h3 className="text-xl font-bold text-primary">Sports Equipment</h3>
                        <p className="text-gray-600">
                            Access premium sports equipment—top-quality gear for every sport, available to rent or buy in one convenient place.
                        </p>
                    </div>
                    <div className=" flex justify-center items-center flex-col p-8 shadow-2xl gap-4 rounded-xl">
                        <img src="/featured3.jpg" alt="" className="h-52 w-52" />
                        <h3 className="text-xl font-bold text-primary">Sports Field</h3>
                        <p className="text-gray-600">
                            Book top-quality sports fields for any game—well-maintained and ready for action, with easy reservations for a great experience.
                        </p>
                    </div>
                    <div className=" flex justify-center items-center flex-col p-8 shadow-2xl gap-4 rounded-xl">
                        <img src="/featured1.png" alt="" className="h-52 w-52" />
                        <h3 className="text-xl font-bold text-primary">Sports Membership</h3>
                        <p className="text-gray-600">
                            Unlock exclusive benefits with unlimited access to premium fields, equipment, and priority booking with our sports facility membership.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFacility;