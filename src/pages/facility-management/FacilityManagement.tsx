import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Title from '../../components/shared/title/Title';
import { TGetAllFacilityQueryParams, useDeleteFacilityMutation, useGetAllFacilityQuery } from '../../redux/api/facility-api';
import { TFacilityData } from '../../type';



const FacilityManagement = () => {
    // get all facility
    const { data: allFacility, isLoading } = useGetAllFacilityQuery({} as TGetAllFacilityQueryParams)

    const [deleteFacility] = useDeleteFacilityMutation()


    // handle delete function
    const handleDelete = async (id: string) => {
        try {
            const res = await deleteFacility(id)

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

    const facilityData = allFacility?.data?.data

    // colomn data for table
    const columns: TableProps<TFacilityData>['columns'] = [
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
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price PerHour',
            dataIndex: 'pricePerHour',
            key: 'pricePerHour',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink to={`/update-facility/${record._id}`}><Button type='primary'>Update</Button></NavLink>
                    <Button onClick={() => handleDelete(record._id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    // row data for table
    const rowData = facilityData ? facilityData.map((elem: TFacilityData) => {
        return {
            key: elem.name,
            name: elem.name,
            img: elem.img,
            pricePerHour: elem.pricePerHour,
            location: elem.location,
            _id: elem._id
        }
    }) : []


    return (
        <div>
            <Title title='All Facility' />
            <div className='flex justify-end mb-4 '>
                <NavLink className="p-5" to={"/add-facility"}><Button type='primary'>Add facility</Button></NavLink>
            </div>
            <div className='w-full overflow-x-auto p-12 rounded-xl shadow-xl'>
                <Table loading={isLoading} columns={columns} dataSource={rowData} pagination={false} style={{ width: "100%", whiteSpace: "nowrap" }} id='table' />
            </div>
        </div>
    )

};

export default FacilityManagement;