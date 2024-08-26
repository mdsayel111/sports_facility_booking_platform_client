import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { getAntDesighnNavItems } from '../../../utils/route';
import route from '../../../route';


const items = getAntDesighnNavItems(route)

const MenuItems = ({ mode }: { mode: "horizontal" | "inline" }) => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode={mode} items={items} style={{ width: "100%" }} />;
};

export default MenuItems;