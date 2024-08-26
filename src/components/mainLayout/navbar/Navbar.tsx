import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { default as Menu, default as MenuItems } from '../menu-items/MenuItems';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    // onclose function
    const onClose = () => {
        setVisible(false)
    };

    // show drawer function
    const showDrawer = () => {
        setVisible(true)
    };
    return (
        <nav className="menuBar sticky bg-white top-0">
            <div className=' flex justify-between lg:w-[90%] w-[95%] mx-auto'>

                {/* logo section */}
                <div className="logo flex justify-center items-center">
                    <NavLink to={"/"}><img className='w-[30px] lg:w-[50px] block' src="/logo.png" alt="" /></NavLink>
                </div>
                
                <div className="menuCon py-2 lg:py-0">
                    {/* larger device nav items */}
                    <div className='hidden lg:block'>
                        <MenuItems mode='horizontal' />
                    </div>

                    {/* smaller device nav items open button */}
                    <Button className="barsMenu" type="primary" onClick={showDrawer}>
                        <GiHamburgerMenu className='text-primary text-2xl font-bold' />
                    </Button>

                    {/* smaller device nav items */}
                    <Drawer
                        id='drawer'
                        closeIcon={"*"}
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        open={visible}
                    >
                        <Menu mode='inline' />
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;