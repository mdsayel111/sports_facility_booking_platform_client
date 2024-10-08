import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { RcFile } from "antd/es/upload";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import BasicButton from "../../components/shared/-basic-button/BasicButton";
import FileInput from "../../components/shared/file-input/FileInput";
import Form from "../../components/shared/form/Form";
import NumberInput from "../../components/shared/number-input/NumberInput";
import TextInput from "../../components/shared/text-input/TextInput";
import Title from "../../components/shared/title/Title";
import { useGetSingleFacilityQuery, useUpdateFacilityMutation } from "../../redux/api/facility-api";
import { TFacilityData } from "../../type";
import { uploadSingleImg } from "../../utils";

const UpdateFacility = () => {
    const { id } = useParams()
    const { data, refetch } = useGetSingleFacilityQuery(id!, { skip: !id ? true : false })

    const facilityData = data?.data

    // react hook form hook
    const methods = useForm()

    const [updateFacility, { isLoading }] = useUpdateFacilityMutation()

    // file list for file input
    const [fileList, setFileList] = useState([] as RcFile[]);

    // add facility handler
    const handleAddFacility = async (data: TFacilityData) => {
        try {
            const imgUrl = fileList.length > 0 ? await uploadSingleImg(data.img as File) : facilityData.img
            data.img = imgUrl
            data.pricePerHour = Number(data.pricePerHour)
            data._id = id as string

            // add facility
            const res = await updateFacility(data)

            if (res.data?.success) {
                refetch()

                setFileList([])
                toast.success(res.data?.message)
            } else {
                data.img = fileList[0]
                const error = res.error as FetchBaseQueryError;

                toast.error((error?.data as any)?.message)
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        // add default value to form after facility data fetch
        methods.reset({
            name: facilityData?.name,
            description: facilityData?.description,
            pricePerHour: facilityData?.pricePerHour,
            location: facilityData?.location
        })
    }, [facilityData])

    return (
        <div className="my-10 flex flex-col justify-center items-center">
            <Title title="Update Facility" />
            <div className="w-72">
                <Form methods={methods} onSubmit={handleAddFacility} className="space-y-4" >
                    <TextInput name="name" placeholder="Name" />
                    <FileInput fileList={fileList} setFileList={setFileList} name="img" multiple={false} />
                    <TextInput name="description" placeholder="Description" />
                    <NumberInput name="pricePerHour" placeholder="Price Per Hour" />
                    <TextInput name="location" placeholder="Location" />
                    <div className="flex justify-center">
                        <BasicButton htmlType="submit" loading={isLoading}>Add Facility</BasicButton>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UpdateFacility;