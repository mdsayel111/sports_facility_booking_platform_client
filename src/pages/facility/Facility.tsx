import { Pagination, Select } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { useState } from "react";
import FacilityCard from "../../components/shared/facility-card/FacilityCard";
import Title from "../../components/shared/title/Title";
import { useGetAllFacilityQuery } from "../../redux/api/facility-api";
import { TFacilityData } from "../../type";
import Loader from "../../components/shared/loader/Loader";

const Facility = () => {
    // create params state for get all facility by filtering
    const [params, setParams] = useState({
        name: "",
        pricePerHour: "asc",
        page: 1
    })

    const { data, isLoading, isFetching } = useGetAllFacilityQuery(params)
    const allFacility = data?.data?.data

    // handleSearch text
    const onSearch: SearchProps['onSearch'] = (value) => setParams({ ...params, name: value });

    // handlePagination function
    const handlePagination = (value: number) => {
        setParams({ ...params, page: value })
    }

    // handle onchange
    const handleChange = (value: string) => {
        setParams({ ...params, pricePerHour: value })
    };

    // get meta from response
    const meta = data?.data?.meta

    console.log(meta)

    return (
        <div className="my-8 min-h-[100vh]">
            <Title title="All Facility" />
            <div>
                <div className="flex gap-4 flex-col lg:flex-row">
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    <Select
                        defaultValue="Sort By Price"
                        style={{ width: 200 }}
                        onChange={handleChange}
                        options={[
                            { value: 'asc', label: 'Low To High' },
                            { value: 'desc', label: 'High TO Low' }
                        ]}
                    />
                </div>
            </div>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                {(allFacility && !isFetching) && allFacility.map((elem: TFacilityData) => <FacilityCard data={elem} key={elem._id} />)}
            </div>
            {(isLoading || isFetching) && <Loader />}
            {
                allFacility?.length === 0 && <h3 className="text-xl text-center mt-8">No Data Found</h3>
            }
            {meta ? <Pagination onChange={handlePagination} align="center" defaultCurrent={meta.page} total={meta.pageNumber * 10} /> : <></>}
        </div>
    );
};

export default Facility;