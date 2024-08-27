import { Button } from "antd";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdOutlineLocalPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Form from "../../components/shared/form/Form";
import TextInput from "../../components/shared/text-input/TextInput";
import { useSignUpMutation } from "../../redux/api/auth-api";
import { useForm } from "react-hook-form";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const SignUp = () => {
    // get signup mutation
    const [signup] = useSignUpMutation()

    // react hook form
    const methods = useForm()

    const navigate = useNavigate()

    // onsubmit function to signup
    const onSubmit = async (data: any) => {
        try {
            const res = await signup({ ...data, role: "user" })
            if (res.data?.success) {
                toast.success(res.data?.message)
                methods.reset()
                navigate("/login", { replace: true })
            } else {
                const error = res.error as FetchBaseQueryError
                toast.error((error.data as any)?.message)
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }
    
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl text-primary font-bold mb-8 text-center">Sign Up</h1>
                <Form methods={methods} onSubmit={onSubmit} className="w-80 space-y-4 flex flex-col items-center">
                    <TextInput name="name" placeholder="Name" prefix={<FaRegUser className="text-gray-400" />} />
                    <TextInput name="email" placeholder="Email" prefix={<CiMail className="text-gray-400" />} />
                    <TextInput name="phone" placeholder="Phone" prefix={<MdOutlineLocalPhone className="text-gray-400" />} />
                    <TextInput name="address" placeholder="Address" prefix={<FaRegBuilding className="text-gray-400" />} />
                    <TextInput name="password" placeholder="Password" prefix={<MdLockOutline className="text-gray-400" />} />
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;