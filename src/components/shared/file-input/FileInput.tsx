import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { RcFile } from 'antd/es/upload';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TFileInput = {
    name: string,
    multiple: boolean
    fileList: RcFile[]
    setFileList: React.Dispatch<React.SetStateAction<RcFile[]>>
}
const FileInput = ({ name, multiple, fileList, setFileList }: TFileInput) => {
    const methods = useFormContext()

    const handleBeforeUpload = (file: RcFile) => {
        setFileList([file]);
        return false;
    };

    const handleRemove = () => {
        setFileList([]);
    };

    return <Controller name={name}
        control={methods.control}
        render={({ field }) => <div className='w-full'>
            <Upload
                onChange={(e) => field.onChange(e.file)} multiple={multiple}
                fileList={fileList}
                beforeUpload={handleBeforeUpload}
                onRemove={handleRemove}
            >
                <Button className='w-full' type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
            </Upload>
        </div>} />

};

export default FileInput;