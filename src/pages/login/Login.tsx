import { Button } from 'antd';
import { CiMail } from 'react-icons/ci';
import { MdLockOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/shared/form/Form';
import TextInput from '../../components/shared/text-input/TextInput';
import toast from 'react-hot-toast';
import { useLogInMutation } from '../../redux/api/auth-api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { setAuth } from '../../redux/slices/auth-slice';
import { useAppDispatch } from '../../redux/hooks';

const Login = () => {
    // get signup mutation
    const [login] = useLogInMutation()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    // onsubmit function to signup
    const onSubmit = async (data: any) => {
        const res = await login(data)
        if (res.data?.success) {
            // set auth state
            dispatch(setAuth(res.data))
            toast.success(res.data?.message)
            navigate("/", { replace: true })
        } else {
            const error = res.error as FetchBaseQueryError;

            // Check if the error has data and that data is an object with a message
            if (error.data && typeof error.data === 'object' && 'message' in error.data) {
                toast.error((error.data as any).message);
            } else {
                toast.error("Something went wrong");
            }
        }
    }
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl text-primary font-bold mb-8 text-center">Login</h1>
                <Form onSubmit={onSubmit} className="w-80 space-y-4 flex flex-col items-center">
                    <TextInput name="email" placeholder="Email" prefix={<CiMail className="text-gray-400" />} />
                    <TextInput name="password" placeholder="Password" prefix={<MdLockOutline className="text-gray-400" />} />
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;