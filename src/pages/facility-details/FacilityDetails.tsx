import { NavLink, useParams } from "react-router-dom";
import Title from "../../components/shared/title/Title";
import { useGetSingleFacilityQuery } from "../../redux/api/facility-api";
import { TFacilityData } from "../../type";
import { Button } from "antd";
import Loader from "../../components/shared/loader/Loader";

const FacilityDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSingleFacilityQuery(id as string, { skip: !id ? true : false })

    const facilityData: TFacilityData = data?.data
    return (
        <div className="my-8">
            <Title title="Facility Details" />
            {
                !isLoading && facilityData && <div className="mt-8 shadow-2xl rounded-xl">
                    <section className="relative ">
                        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 p-16">
                                <div className="img flex justify-center items-center">
                                    <div className="img-box h-[100%] w-[100%]  ">
                                        <img src={facilityData.img as string} alt="Yellow Tropical Printed Shirt image"
                                            className="w-full h-full" />
                                    </div>
                                </div>
                                <div
                                    className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                                    <div className="data w-full max-w-xl">
                                        <h2 className="font-manrope font-bold text-3xl leading-10 text-primary mb-2 capitalize">{facilityData.name}</h2>
                                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                            <h6
                                                className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                                BDT {facilityData.pricePerHour}</h6>
                                        </div>
                                        <p className="text-gray-500 text-base font-normal mb-5">
                                            {facilityData.description}
                                        </p>
                                        <p className="mb-4">
                                            Location: {facilityData.location}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <NavLink to={`/facility-booking/${facilityData._id}`}><Button type="primary">Book Now</Button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            }
            {
                isLoading && <Loader />
            }
        </div>
    );
};

export default FacilityDetails;