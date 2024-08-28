import { useState } from "react";
import { useGetAllFacilityQuery } from "../../redux/api/facility-api";
import FacilityCard from "../../components/shared/facility-card/FacilityCard";
import { TFacilityData } from "../../type";
import Title from "../../components/shared/title/Title";

const Facility = () => {
    // create params state for get all facility by filtering
    const [params, setParams] = useState({
        name: "",
        pricePerHour: "asc",
        page: 0
    })

    const { data } = useGetAllFacilityQuery(params)
    const allFacility = data?.data?.data

    return (
        <div className="my-8">
            <Title title="All Facility" />
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-8">
                {allFacility && allFacility.map((elem: TFacilityData) => <FacilityCard data={elem} key={elem._id} />)}
            </div>
        </div>
    );
};

export default Facility;