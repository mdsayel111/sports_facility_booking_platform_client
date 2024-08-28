import { useParams } from "react-router-dom";
import Title from "../../components/shared/title/Title";
import { useGetSingleBookingQuery } from "../../redux/api/booking-api";
import { TBookingData } from "../../type";

const BookingDetails = () => {
    const { id } = useParams()

    // get booking details
    const { data } = useGetSingleBookingQuery(id as string, { skip: !id ? true : false })

    const bookingData: TBookingData = data?.data
    return (
        <div className="my-8">
            <Title title="Booking Details" />
            {
                bookingData && <div className="flex justify-center items-center gap-20 flex-col lg:flex-row p-8 rounded-xl shadow-2xl my-8">
                    <div className="flex justify-center items-center">
                        <div className="lg:w-96 lg:h-96 w-50 h-50">
                            <img className="w-full" src={bookingData.facility.img as string} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="space-y-4">
                            <p>Date: {new Date(bookingData.date).toLocaleDateString("ca-en")}</p>
                            <h3 className="text-primary font-bold text-2xl">{bookingData.facility.name}</h3>
                            <p className="text-lg">
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
                            <p className="text-lg">Location: {bookingData.facility.location}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookingDetails;