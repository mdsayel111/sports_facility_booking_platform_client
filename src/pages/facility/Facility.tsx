import { useState } from "react";
import { useGetAllFacilityQuery } from "../../redux/api/facility-api";
import FacilityCard from "../../components/shared/facility-card/FacilityCard";
import { TFacilityData } from "../../type";

const Facility = () => {
    // create params state for get all facility by filtering
    const [params, setParams] = useState({
        name: "",
        pricePerHour: "asc",
        page: 0
    })

    const { data } = useGetAllFacilityQuery(params)

    return (
        <div>
            {data?.data?.data?.map((elem: TFacilityData) => <FacilityCard data={elem} key={elem._id} />)}
        </div>
    );
};

export default Facility;