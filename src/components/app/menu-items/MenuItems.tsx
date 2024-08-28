import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminForbiddenPath, userForbiddenPath } from '../../../constant';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logout, selectAuth } from '../../../redux/slices/auth-slice';
import route from '../../../route';
import { getAntDesighnNavItems } from '../../../utils';

const MenuItems = ({ mode }: { mode: "horizontal" | "inline" }) => {
    const [current, setCurrent] = useState("Home");

    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };


    // get user data from state
    const auth = useAppSelector(selectAuth)

    const dispatch = useAppDispatch()

    // create forbidden path based on role
    let forbiddenPath: string[];

    // if role === "admin"
    if (auth.userData.role === "admin") {
        forbiddenPath = adminForbiddenPath
    }
    // else if if role === "user"
    else if (auth.userData.role === "user") {
        forbiddenPath = userForbiddenPath
    }
    // else
    else {
        forbiddenPath = [...userForbiddenPath, ...adminForbiddenPath, "Dashboard"]
    }

    // get items based on role
    let items = getAntDesighnNavItems(route, forbiddenPath)

    // logout handler
    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
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