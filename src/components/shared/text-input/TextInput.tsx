import { Input } from "antd";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TTextInput = {
    name: string
    placeholder: string
    type?: string
    prefix?: ReactNode
}

const TextInput = ({ name, placeholder, type = "text", prefix }: TTextInput) => {
    const methods = useFormContext()
    return (
        <Controller
            name={name}
            control={methods.control}
            render={({ field }) => <div>
                <Input {...field} size="large" placeholder={placeholder} type={type} {...(prefix && { prefix })} />
            </div>}
        />

    );
};

export default TextInput;