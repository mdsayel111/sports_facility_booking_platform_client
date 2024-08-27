import { InputNumber } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type TNumberInput = { name: string, placeholder: string }
const NumberInput = ({ name, placeholder }: TNumberInput) => {
    const methods = useFormContext()
    return (
        <Controller
            name={name}
            control={methods.control}
            render={({ field }) => <div>
                <InputNumber<number>
                    {...field}
                    placeholder={placeholder}
                    style={{ width: "100%" }}
                    stringMode
                />
            </div>}
        />

    );
};

export default NumberInput;