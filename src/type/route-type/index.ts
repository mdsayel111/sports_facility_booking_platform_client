import { MenuProps } from "antd";
import { ReactNode } from "react";

export type TRoute = {
    name?: string;
    index?: boolean;
    path: string;
    element: ReactNode;
    children?: TRoute[]
}

export type TMenuItem = Required<MenuProps>['items'][number];