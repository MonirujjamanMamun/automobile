import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-red.jpg';

const NavBar = () => {
  const menuItem = (
    <>
      <li>
        <Link className="font-bold text-lg text-white" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="font-bold text-lg text-white" to="/shop">
          SHOP
        </Link>
      </li>
      <li>
        <Link className="font-bold text-lg text-white" to="/news">
          NEWS
        </Link>
      </li>
      <li>
        <Link className="font-bold text-lg text-white" to="/contact">
          CONTACT
        </Link>
      </li>
      <li>
        <Link className="font-bold text-lg text-white" to="/login">
          LOG IN
        </Link>
      </li>
      <li>
        <Link className="font-bold text-lg text-white" to="/register">
          SIGN IN
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar py-[1.25rem] bg-gray-500 flex-nowrap mt-0">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label> */}
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-[0.75rem] p-[0.5rem] shadow rounded-box"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-16 md:w-15 lg:w-15 p-[4px]" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-end w-full">
        <div>
          <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
