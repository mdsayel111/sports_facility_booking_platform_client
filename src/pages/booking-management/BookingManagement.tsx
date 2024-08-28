import { Table, TableProps, Tag } from "antd";
import Title from "../../components/shared/title/Title";
import { useGetAllBookingQuery } from "../../redux/api/booking-api";
import { TBookingData } from "../../type";

const BookingManagement = () => {
    const { data } = useGetAllBookingQuery(undefined)

    const allBookings = data?.data

    // colomn data for table
    const columns: TableProps<TBookingData>['columns'] = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Facility Id',
            dataIndex: 'facility._id',
            key: 'id',
            render: (_, render) => <h6>{render._id}</h6>,
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTIme',
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: 'Is Booked',
            dataIndex: 'isBooked',
            key: 'isBooked',
            render: (text) => (<Tag color={text === "confirmed" ? "green" : text === "unconfirm" ? "blue" : "red"}>
                {text}
            </Tag>)
        },
        {
            title: 'Bill',
            dataIndex: 'payableAmount',
            key: 'payableAmount',
            render: (text) => (<span>{text} BDT</span>)
        },
    ];

    // row data for table
    const rowData = allBookings ? allBookings.map((elem: TBookingData) => {
        return {
            key: elem._id,
            name: elem.user.name,
            email: elem.user.email,
            startTime: elem.startTime,
            endTime: elem.endTime,
            _id: elem._id,
            isBooked: elem.isBooked,
            payableAmount: elem.payableAmount
        }
    }) : []

    console.log(allBookings)
    return (
        <div>
            <Title title="All Bookings" />
            <div className='w-full overflow-x-auto'>
                <Table columns={columns} dataSource={rowData} pagination={false} style={{ width: "100%", whiteSpace: "nowrap" }} id='table' />
            </div>
        </div>
    );
};

export default BookingManagement;