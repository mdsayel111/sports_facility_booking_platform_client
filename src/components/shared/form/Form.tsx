import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";

type TForm = {
    children: ReactNode
    className?: string
    methods: UseFormReturn<FieldValues, any, undefined>
    onSubmit: SubmitHandler<any>
}

const Form = ({ children, className, onSubmit, methods }: TForm) => {

    return (
        <FormProvider {...methods}>
            <form className={className} onSubmit={methods.handleSubmit(onSubmit)
            }>
                {children}
            </form>
        </FormProvider>

    );
};

export default Form;