import Banner from '../../components/home-page/banner/Banner';
import Testimonial from '../../components/home-page/testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <div className='my-8'>
                <Banner />
            </div>
            <div className='mb-8'>
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;