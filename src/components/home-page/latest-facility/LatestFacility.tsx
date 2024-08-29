import { useGetLatestFacilityQuery } from "../../../redux/api/facility-api";
import { TFacilityData } from "../../../type";
import FacilityCard from "../../shared/facility-card/FacilityCard";
import Loader from "../../shared/loader/Loader";
import Title from "../../shared/title/Title";

const LatestFacility = () => {
    // getting latest facility
    const { data: data, isLoading } = useGetLatestFacilityQuery(undefined)
    const latestFacility = data?.data?.data
    return (
        <div>
            <Title title="Latest Facility" />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                {
                    latestFacility && latestFacility.length > 0 ? latestFacility.map((facility: TFacilityData) => (<div className="shadow-2xl">
                        <FacilityCard data={facility} />
                    </div>)) : <>No</>
                }
            </div>
            {isLoading && <Loader />}
        </div>
    );
};

export default LatestFacility;