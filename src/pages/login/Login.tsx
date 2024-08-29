import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CiMail } from 'react-icons/ci';
import { MdLockOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../../components/shared/-basic-button/BasicButton';
import Form from '../../components/shared/form/Form';
import TextInput from '../../components/shared/text-input/TextInput';
import { useLogInMutation } from '../../redux/api/auth-api';
import { useAppDispatch } from '../../redux/hooks';
import { setAuth } from '../../redux/slices/auth-slice';

const Login = () => {
    // get signup mutation
    const [login, { isLoading }] = useLogInMutation()

    // react hook form methds
    const methods = useForm()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    // onsubmit function to signup
    const onSubmit = async (data: any) => {
        try {
            const res = await login(data)
            if (res.data?.success) {
                // set auth state
                dispatch(setAuth(res.data))
                toast.success(res.data?.message)
                navigate("/", { replace: true })
            } else {
                const error = res.error as FetchBaseQueryError;
                toast.error((error.data as any).message);
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl text-primary font-bold mb-8 text-center">Login</h1>
                <Form methods={methods} onSubmit={onSubmit} className="w-80 space-y-4 flex flex-col items-center">
                    <TextInput name="email" placeholder="Email" prefix={<CiMail className="text-gray-400" />} />
                    <TextInput name="password" placeholder="Password" prefix={<MdLockOutline className="text-gray-400" />} />
                    <BasicButton loading={isLoading} htmlType="submit">Lig In</BasicButton>
                </Form>
            </div>
        </div>
    );
};

export default Login;