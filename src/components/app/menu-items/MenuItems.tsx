import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import route from '../../../route';
import { getAntDesighnNavItems } from '../../../utils/route';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logout, selectAuth } from '../../../redux/slices/auth-slice';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ mode }: { mode: "horizontal" | "inline" }) => {
    const [current, setCurrent] = useState("home");

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    let items = getAntDesighnNavItems(route)

    // get user data from state
    const auth = useAppSelector(selectAuth)

    const dispatch = useAppDispatch()

    // logout handler
    const handleLogout = () => {
        dispatch(logout())
    }

    // if auth.token exist, means user logged in
    if (auth.token) {
        // render logout button
        items.push(
            {
                label: (<Button type='primary' onClick={handleLogout}>Logout</Button>),
                key: "logout"
            }
        )
    } else {
        // add login and signup nav link
        items = items.concat([{
            key: "login",
            label: <NavLink to={"/login"}>Login</NavLink>
        },
        {
            key: "signup",
            label: <NavLink to={"/signup"}>Signup</NavLink>
        }])
    }

    return <Menu onClick={onClick} selectedKeys={[current]} mode={mode} items={items} style={{ width: "100%" }} />;
};

export default MenuItems;