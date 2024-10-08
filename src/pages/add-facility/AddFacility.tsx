import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import BasicButton from "../../components/shared/-basic-button/BasicButton";
import FileInput from "../../components/shared/file-input/FileInput";
import Form from "../../components/shared/form/Form";
import NumberInput from "../../components/shared/number-input/NumberInput";
import TextInput from "../../components/shared/text-input/TextInput";
import Title from "../../components/shared/title/Title";
import { useAddFacilityMutation } from "../../redux/api/facility-api";
import { TFacilityData } from "../../type";
import { uploadSingleImg } from "../../utils";

const AddFacility = () => {
    // react hook form hook
    const methods = useForm()

    // loading state
    const [loading, setLoading] = useState(false)

    const [addFacility] = useAddFacilityMutation()

    // file list for file input
    const [fileList, setFileList] = useState([] as RcFile[]);

    // add facility handler
    const handleAddFacility = async (data: TFacilityData) => {
        setLoading(!loading)
        try {
            const imgUrl = await uploadSingleImg(data.img as File)
            data.img = imgUrl
            data.pricePerHour = Number(data.pricePerHour)

            // add facility
            const res = await addFacility(data)

            if (res.data?.success) {
                // reset form
                methods.reset()

                setFileList([])
                toast.success(res.data?.message)
            } else {
                data.img = fileList[0]
                const error = res.error as FetchBaseQueryError;

                toast.error((error?.data as any)?.message)
            }
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(loading => !loading)
        }
    }

    return (
        <div className="my-10 flex flex-col justify-center items-center">
            <Title title="Add Facility" />
            <div className="w-72">
                <Form methods={methods} onSubmit={handleAddFacility} className="space-y-4" >
                    <TextInput name="name" placeholder="Name" />
                    <FileInput fileList={fileList} setFileList={setFileList} name="img" multiple={false} />
                    <TextInput name="description" placeholder="Description" />
                    <NumberInput name="pricePerHour" placeholder="Price Per Hour" />
                    <TextInput name="location" placeholder="Location" />
                    <div className="flex justify-center">
                        <BasicButton htmlType="submit" loading={loading}>Add Facility</BasicButton>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddFacility;