import { Pagination, Select } from "antd";
import Search from "antd/es/input/Search";
import { ChangeEventHandler, useState } from "react";
import FacilityCard from "../../components/shared/facility-card/FacilityCard";
import Loader from "../../components/shared/loader/Loader";
import Title from "../../components/shared/title/Title";
import { useGetAllFacilityQuery } from "../../redux/api/facility-api";
import { TFacilityData } from "../../type";

const Facility = () => {
    // create params state for get all facility by filtering
    const [params, setParams] = useState<any>({
        search: "",
        page: 1
    })

    const { data, isLoading, isFetching } = useGetAllFacilityQuery(params)
    const allFacility = data?.data?.data

    // handleSearch text
    const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => setParams({ ...params, search: (e.target as any).value, page: 1 });

    // handlePagination function
    const handlePagination = (value: number) => {
        setParams({ ...params, page: value })
    }

    // handle onchange
    const handleChange = (value: string) => {
        setParams({ ...params, pricePerHour: value, page: 1 })
    };

    // get meta from response
    const meta = data?.data?.meta

    return (
        <div className="my-8 min-h-[100vh]">
            <Title title="All Facility" />
            <div>
                <div className="flex gap-4 flex-col lg:flex-row">
                    <Search placeholder="input search text" onChange={onSearch} style={{ width: 200 }} />
                    <Select
                        placeholder="FIlter By Price"
                        // defaultValue="0"
                        style={{ width: 200 }}
                        onChange={handleChange}
                        options={[
                            { value: "100", label: '0-100' },
                            { value: "200", label: '0-200' },
                            { value: "300", label: '0-300' },
                            { value: '400', label: '0-400' },
                            { value: '500', label: '0-500' },
                            { value: `${Number.MAX_SAFE_INTEGER}`, label: '500+' }
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
            {meta ? <Pagination onChange={handlePagination} align="center" defaultCurrent={params.page} total={meta.pageNumber * 10} current={params.page} /> : <></>}
        </div>
    );
};

export default Facility;