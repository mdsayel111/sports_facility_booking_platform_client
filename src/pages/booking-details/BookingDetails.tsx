import { useParams } from "react-router-dom";
import Title from "../../components/shared/title/Title";
import { useGetSingleBookingQuery } from "../../redux/api/booking-api";
import { TBookingData } from "../../type";
import { Tag } from "antd";

const BookingDetails = () => {
    const { id } = useParams()

    // get booking details
    const { data } = useGetSingleBookingQuery(id as string, { skip: !id ? true : false })

    const bookingData: TBookingData = data?.data
    return (
        <div className="my-8">
            <Title title="Booking Details" />
            {
                bookingData && <div className="flex justify-center items-center gap-20 flex-col lg:flex-row p-16 rounded-xl shadow-2xl my-8">
                    <div className="flex justify-center items-center lg:w-1/2 w-full">
                        <div className="w-full">
                            <img className="w-full" src={bookingData.facility.img as string} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-1/2">
                        <div className="space-y-4">
                            <p>Date: {new Date(bookingData.date).toLocaleDateString("ca-en")}</p>
                            <h3 className="text-primary font-bold text-2xl">{bookingData.facility.name}</h3>
                            <p className="text-lg text-gray-400">
                                {bookingData.facility.description}
                            </p>
                            <div className="flex gap-4 text-lg">
                                <p>Start Time: {bookingData.startTime}</p>
                                <div className="border-x-2 border-secondary" />
                                <p>End Time: {bookingData.endTime}</p>
                            </div>
                            <div className="flex gap-4 text-lg">
                                <p>Price per Hoer: {bookingData.facility.pricePerHour}</p>
                                <div className="border-x-2 border-secondary" />
                                <p>Total Price: {bookingData.payableAmount}</p>
                            </div>
                            <p className="text-lg">
                                Status: <Tag color={bookingData.isBooked === "confirmed" ? "green" : "red"}>{bookingData.isBooked}</Tag>
                            </p>
                            <p className="text-lg">Location: {bookingData.facility.location}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookingDetails;