import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const menuItem =
        <>
            <li><Link className='font-bold text-lg text-white' to='/'>HOME</Link></li>
            <li><Link className='font-bold text-lg text-white' to='/shop'>SHOP</Link></li>
            <li><Link className='font-bold text-lg text-white' to='/news'>NEWS</Link></li>
            <li><Link className='font-bold text-lg text-white' to='/contact'>CONTACT</Link></li>
        </>

    return (
        <div className="navbar py-5 bg-[#20262f]">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label> */}
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-16 md:w-15 lg:w-15' src='https://www.anjuliroyalenfield.com/logoo.jpeg' alt='logo' />
                </Link>
            </div>

            <div className="navbar-end w-full">
                <div>
                    <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {/* {menuItem} */}
                        <li><Link className='font-bold text-lg text-white' to='/'>HOME</Link></li>
                        <li><Link className='font-bold text-lg text-white' to='/shop'>SHOP</Link></li>
                        <li><Link className='font-bold text-lg text-white' to='/news'>NEWS</Link></li>
                        <li><Link className='font-bold text-lg text-white' to='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;