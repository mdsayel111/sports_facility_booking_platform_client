import { useState } from "react";
import { useGetAllFacilityQuery } from "../../redux/api/facility-api";
import FacilityCard from "../../components/shared/facility-card/FacilityCard";
import { TFacilityData } from "../../type";
import Title from "../../components/shared/title/Title";
import Search, { SearchProps } from "antd/es/input/Search";
import { RiH3 } from "react-icons/ri";
import { Pagination, Select } from "antd";

const Facility = () => {
    // create params state for get all facility by filtering
    const [params, setParams] = useState({
        name: "",
        pricePerHour: "asc",
        page: 0
    })

    const { data } = useGetAllFacilityQuery(params)
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
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-8">
                {allFacility && allFacility.map((elem: TFacilityData) => <FacilityCard data={elem} key={elem._id} />)}
            </div>
            {
                allFacility?.length === 0 && <h3 className="text-xl text-center mt-8">No Data Found</h3>
            }

            {meta ? <Pagination onChange={handlePagination} align="center" defaultCurrent={meta.page} total={meta.pageNumber} /> : <></>}
        </div>
    );
};

export default Facility;