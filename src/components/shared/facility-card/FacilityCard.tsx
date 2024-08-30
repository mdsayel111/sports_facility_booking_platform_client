import { Button, Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { TFacilityData } from '../../../type';

const { Meta } = Card;



const FacilityCard = ({ data }: { data: TFacilityData }) => {
    const { _id, name, img, description, pricePerHour } = data
    return (
        <div className='shadow-2xl p-8 rounded-xl'>
            <Card
                style={{ width: "100%", border: "0px" }}
                cover={
                    <img
                        className='w-[300px] h-[300px]'
                        alt="example"
                        src={img as string}
                    />
                }
                actions={[<NavLink to={`/facility-details/${_id}`}><Button type='primary' >View Details</Button></NavLink>]}
            >
                <Meta
                    title={name}
                    description={<div>
                        <p>{`${description.slice(0, 25)}... more`}</p>
                        <p className='text-secondary mt-2'>Price Per Hour: {pricePerHour} BDT</p>
                    </div>}
                />
            </Card>
        </div>
    )
};

export default FacilityCard;