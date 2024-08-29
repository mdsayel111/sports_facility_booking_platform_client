import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdOutlineLocalPhone } from "react-icons/md";
import BasicButton from "../../components/shared/-basic-button/BasicButton";
import Form from "../../components/shared/form/Form";
import TextInput from "../../components/shared/text-input/TextInput";
import Title from "../../components/shared/title/Title";
import { useCreateAdminMutation } from "../../redux/api/auth-api";

const CreateAdminAccount = () => {
    // get signup mutation
    const [createAdmin, { isLoading }] = useCreateAdminMutation()

    // react hook form
    const methods = useForm()

    // onsubmit function to signup
    const onSubmit = async (data: any) => {
        try {
            const res = await createAdmin({ ...data, role: "admin" })
            if (res.data?.success) {
                toast.success(res.data?.message)
                methods.reset()
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
                <Title title="Create Admin" />
                <Form methods={methods} onSubmit={onSubmit} className="w-80 space-y-4 flex flex-col items-center">
                    <TextInput name="name" placeholder="Name" prefix={<FaRegUser className="text-gray-400" />} />
                    <TextInput name="email" placeholder="Email" prefix={<CiMail className="text-gray-400" />} />
                    <TextInput name="phone" placeholder="Phone" prefix={<MdOutlineLocalPhone className="text-gray-400" />} />
                    <TextInput name="address" placeholder="Address" prefix={<FaRegBuilding className="text-gray-400" />} />
                    <TextInput name="password" placeholder="Password" prefix={<MdLockOutline className="text-gray-400" />} />
                    <BasicButton loading={isLoading} htmlType="submit">Create Admin</BasicButton>
                </Form>
            </div>
        </div>
    );
};

export default CreateAdminAccount;