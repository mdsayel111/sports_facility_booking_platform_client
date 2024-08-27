import { useAppSelector } from "../../../redux/hooks";
import { selectAuth } from "../../../redux/slices/auth-slice";

const Greeting = () => {
    // get auth from state
    const auth = useAppSelector(selectAuth)
    return (
        <div className="bg-secondary flex justify-between items-center gap-20 p-8 rounded-xl">
            <div className="space-y-4 w-full lg:w-1/2">
                <h1 className="text-2xl font-bold text-white">Welcome Back, <span className="text-primary">{auth?.userData.name}</span></h1>
                <p className="text-white">Welcome to our sports facility booking website! Easily find and reserve the perfect venue for your game, so you can focus on enjoying the action.</p>
            </div>
            <div className="justify-center items-center w-1/2 hidden lg:flex">
                <img src="/greeting.png" alt="" />
            </div>
        </div>
    );
};

export default Greeting;