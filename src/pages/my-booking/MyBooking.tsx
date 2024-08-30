import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Button, Space, Table, TableProps, Tag } from "antd";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Title from "../../components/shared/title/Title";
import { useGetUserBookingsQuery, useUpdateBookingMutation } from "../../redux/api/booking-api";
import { TBookingData } from "../../type";
import "./my-booking.css";

const MyBooking = () => {
    // get all bookings of user
    const { data: allBookingsOfUser, isLoading } = useGetUserBookingsQuery(undefined)

    const [cancelBooking] = useUpdateBookingMutation()


    // handle delete function
    const handleCancel = async (id: string) => {
        try {
            const res = await cancelBooking({ id, data: { isBooked: "cancel" } })

            if (res.data?.success) {
                toast.success(res.data?.message)
            } else {
                const error = res.error as FetchBaseQueryError;
                toast.error((error.data as any).message);
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const bookingData = allBookingsOfUser?.data

    // colomn data for table
    const columns: TableProps<any>['columns'] = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (_, record) => <p>{new Date(record.date).toLocaleDateString("ca-en")}</p>,
        },
        {
            title: 'Image',
            dataIndex: 'img',
            key: 'img',
            render: (text) => <img className='lg:min-w-52 lg:min-h-52 lg:max-w-52  lg:max-h-52 min-w-24 min-h-24' src={text} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: 'Price PerHour',
            dataIndex: 'pricePerHour',
            key: 'pricePerHour',
        },
        {
            title: 'Total Price',
            dataIndex: 'payableAmount',
            key: 'payableAmount',
        },
        {
            title: 'Status',
            key: 'status',
            render: (_, record) => (
                <Tag color={record.isBooked === "confirmed" ? "green" : "red"}>{record.isBooked}</Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink to={`/booking-details/${record._id}`}><Button >View Details</Button></NavLink>
                    <Button type="primary" disabled={record.isBooked === "cancel"} onClick={() => handleCancel(record._id)}>Cancel</Button>
                </Space>
            ),
        },
    ];

    // row data for table
    const rowData = bookingData ? bookingData.map((elem: TBookingData) => {
        return {
            key: elem._id,
            name: elem.facility.name,
            date: elem.date,
            img: elem.facility.img,
            pricePerHour: elem.facility.pricePerHour,
            location: elem.facility.location,
            startTime: elem.startTime,
            endTime: elem.endTime,
            payableAmount: elem.payableAmount,
            _id: elem._id,
            isBooked: elem.isBooked
        }
    }) : []


    return (
        <div>
            <Title title='My Bookings' />
            <div className='w-full overflow-x-scroll shadow-2xl p-12 rounded-2xl'>
                <Table loading={isLoading} columns={columns} dataSource={rowData} pagination={false} style={{ width: "auto", whiteSpace: "nowrap", textAlign: "center" }} id='table' />
            </div>
        </div>
    )
};

export default MyBooking;