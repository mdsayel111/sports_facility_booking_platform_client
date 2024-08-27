import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TForm = {
    children: ReactNode
    className?: string
    onSubmit: SubmitHandler<any>
}

const Form = ({ children, className, onSubmit }: TForm) => {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(async (data) => {
                await onSubmit(data)
                methods.reset()
            })
            }>
                {children}
            </form>
        </FormProvider>

    );
};

export default Form;