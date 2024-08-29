import { Button } from "antd";
import { ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type TButton = {
    onClick?: any
    children: ReactNode
    loading?: boolean
    htmlType?: "button" | "submit" | "reset"
}

const BasicButton = ({ onClick, htmlType, children, loading }: TButton) => {
    return (
        <div>
            <Button {...(onClick ? { onClick } : {})} htmlType={htmlType} type='primary'  >{loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : children}</Button>
        </div>
    );
};

export default BasicButton;