import { Button, Input } from "antd";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import Form from "../../components/shared/form/Form";
import TextInput from "../../components/shared/text-input/TextInput";
import { CiMail } from "react-icons/ci";
import { MdLockOutline, MdOutlineLocalPhone } from "react-icons/md";

const SignUp = () => {
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl text-primary font-bold mb-8 text-center">Sign Up</h1>
                <Form onSubmit={onSubmit} className="w-80 space-y-4 flex flex-col items-center">
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