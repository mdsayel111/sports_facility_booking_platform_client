import Banner from '../../components/home-page/banner/Banner';
import HowItWorks from '../../components/home-page/how-it-works/HowItWorks';
import LatestFacility from '../../components/home-page/latest-facility/LatestFacility';
import Testimonial from '../../components/home-page/testimonial/Testimonial';
import FeaturedFacility from '../../components/shared/featured-facility/FeaturedFacility';

const Home = () => {
    return (
        <div>
            <div className='my-8'>
                <Banner />
            </div>
            <div className='my-20'>
                <FeaturedFacility />
            </div>
            <div className='my-20'>
                <HowItWorks />
            </div>
            <div className='mb-20'>
                <LatestFacility />
            </div>
            <div className='mb-20'>
                <Testimonial />
            </div>

        </div>
    );
};

export default Home;