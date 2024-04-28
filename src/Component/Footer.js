import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-red.jpg';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <>
      <footer className={`footer p-10 text-white bg-gray-500 mt-20`}>
        <div className="text-center">
          <img
            width="60"
            height="60"
            viewBox="0 0 24 24"
            className="mx-auto rounded-sm"
            src={logo}
            alt="logo"
          />
          <p className="text-lg">
            Anjuli Automobiles Pvt Ltd.
            <br />
            Providing reliable tech since 2001
          </p>
        </div>
        <div className="sm:mx-auto">
          <span className="text-lg text-white uppercase font-black">
            Services
          </span>
          <Link to={'#'} className="text-white uppercase no-underline">
            ONLINE BOOKING
          </Link>
          <Link to={'#'} className="text-white uppercase no-underline">
            REFUNDABLE BOOKING AMOUNT
          </Link>
          <Link to={'#'} className="text-white uppercase no-underline">
            HOME BOOKING & DELIVER
          </Link>
          <Link to={'#'} className="text-white uppercase no-underline">
            PICK UP & DROP FACILITY
          </Link>
          <Link to={'#'} className="text-white uppercase no-underline">
            FREE TEST RIDE AT HOME
          </Link>
        </div>
        <div>
          <span className="text-lg text-white uppercase font-black">
            Company
          </span>
          <Link className="text-white uppercase no-underline" to={'/shop'}>
            SHOP
          </Link>
          <Link className="text-white uppercase no-underline" to={'/news'}>
            NEWS
          </Link>
          <Link className="text-white uppercase no-underline" to={'/contact'}>
            CONTACT
          </Link>
        </div>
        <div>
          <span className="text-lg text-white uppercase font-black">Legal</span>
          <Link className="text-white uppercase no-underline" to={'#'}>
            TERMS OF USE
          </Link>
          <Link className="text-white uppercase no-underline" to={'#'}>
            PRIVACY POLICY
          </Link>
          <Link className="text-white uppercase no-underline" to={'#'}>
            COOKIE POLICY
          </Link>
        </div>
      </footer>
      <div className="bg-gray-600 py-5 text-center">
        <p className="sm:text-sm text-lg text-white uppercase font-bold">
          Copyright © {currentYear} - All right reserved by Anjuli AutoMobiles
          Pvt Ltd.
        </p>
      </div>
    </>
  );
};

export default Footer;
