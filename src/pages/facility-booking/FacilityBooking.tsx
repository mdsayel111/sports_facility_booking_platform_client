import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/shared/title/Title";
import { useGetSingleFacilityQuery } from "../../redux/api/facility-api";
import { useState } from "react";
import { useAddBookingMutation, useGetAvailableSlotsQuery } from "../../redux/api/booking-api";
import { Button, DatePicker, DatePickerProps } from "antd";
import { TSlotData } from "../../type";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const FacilityBooking = () => {
    // date state
    const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"))

    const { id } = useParams()

    const navigate = useNavigate()

    const [addBooking] = useAddBookingMutation()

    // get facility data
    const { data } = useGetSingleFacilityQuery(id as string, { skip: !id ? true : false })

    // get available slot
    const { data: allSlotsRes } = useGetAvailableSlotsQuery(date)

    // all slote
    const allSlots: TSlotData[] = allSlotsRes?.data

    // facillity data
    const facilityData = data?.data


    // handle date onchange
    const handleDateOnchange: DatePickerProps['onChange'] = (date: any) => {
        setDate(date.$d.toLocaleDateString('en-CA'))
    };

    // handle booking function
    const handleBooking = async (startTime: string, endTime: string) => {
        const bookingData = {
            startTime,
            endTime,
            date,
            facility: facilityData._id
        }
        try {

            const res = await addBooking(bookingData)
            if (res.data?.success) {
                const id = res.data?.data?._id
                toast.success(res.data?.message)
                navigate(`/booking-details/${id}`)
            } else {
                const error = res.error as FetchBaseQueryError
                toast.error((error.data as any).message)
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }


    return (
        <div className="my-8">
            <Title title="Book Facility" />
            <div className="flex justify-center items-center ">
                <div className="flex flex-col justify-center items-center shadow-2xl  p-8 w-fit rounded-xl">
                    {facilityData && <div className="border-4 border-primary p-4 rounded-lg">
                        <h3 className="text-lg font-bold flex gap-2">
                            <span>Facility:</span>
                            <span> {facilityData.name}</span>
                        </h3>
                        <p className="flex gap-2">
                            <span>Price Per Hour:</span>
                            <span> {facilityData.pricePerHour}</span>

                        </p>
                        <p className="flex gap-2">
                            <span> Location:</span>
                            <span> {facilityData.location}</span>
                        </p>
                    </div>}
                    <div className="mt-4 flex gap-4 items-center">
                        <DatePicker onChange={handleDateOnchange} />
                        <Button type="primary">Check Avaiablity</Button>
                    </div>
                    <div>
                        <h3 className="text-secondary my-4 text-lg font-bold">Available Slot</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {
                                allSlots && allSlots.map((slot) => (<div key={slot.startTime} className="flex flex-col justify-center gap-4   border-2 p-4 rounded-lg border-primary">
                                    <div className="flex gap-4">
                                        <div className="space-x-2">
                                            <span>
                                                Start time:
                                            </span>
                                            <span>
                                                {slot.startTime}
                                            </span>
                                        </div>
                                        <div className="border-x-[1px] border-secondary" />
                                        <div className="space-x-2">
                                            <span>
                                                End time:
                                            </span>
                                            <span>
                                                {slot.endTime}
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => handleBooking(slot.startTime, slot.endTime)}
                                        type="primary">Book Now</Button>
                                </div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityBooking;