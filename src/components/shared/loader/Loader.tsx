import Lottie from "lottie-react";
import loaderJson from "../../../assets/loader.json"

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} lg:h-80 lg:w-80 mx-auto my-10 w-40 h-40`}>
            <Lottie animationData={loaderJson} loop={true} />
        </div>
    );
};

export default Loader;