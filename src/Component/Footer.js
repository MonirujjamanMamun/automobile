import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className={`footer p-10 text-white bg-[#20262f] mt-20`}>
        <div className="text-center">
          <img
            width="60"
            height="60"
            viewBox="0 0 24 24"
            className="mx-auto rounded-sm"
            src="https://www.anjuliroyalenfield.com/logoo.jpeg"
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
          <Link to={'#'} className="text-white uppercase decoration-neutral">
            ONLINE BOOKING
          </Link>
          <Link to={'#'} className="text-white uppercase decoration-neutral">
            REFUNDABLE BOOKING AMOUNT
          </Link>
          <Link to={'#'} className="text-white uppercase decoration-neutral">
            HOME BOOKING & DELIVER
          </Link>
          <Link to={'#'} className="text-white uppercase decoration-neutral">
            PICK UP & DROP FACILITY
          </Link>
          <Link to={'#'} className="text-white uppercase decoration-neutral">
            FREE TEST RIDE AT HOME
          </Link>
        </div>
        <div>
          <span className="text-lg text-white uppercase font-black">
            Company
          </span>
          <Link
            className="text-white uppercase decoration-neutral"
            to={'/shop'}
          >
            SHOP
          </Link>
          <Link
            className="text-white uppercase decoration-neutral"
            to={'/news'}
          >
            NEWS
          </Link>
          <Link
            className="text-white uppercase decoration-neutral"
            to={'/contact'}
          >
            CONTACT
          </Link>
        </div>
        <div>
          <span className="text-lg text-white uppercase font-black">Legal</span>
          <Link className="text-white uppercase decoration-neutral" to={'#'}>
            TERMS OF USE
          </Link>
          <Link className="text-white uppercase decoration-neutral" to={'#'}>
            PRIVACY POLICY
          </Link>
          <Link className="text-white uppercase decoration-neutral" to={'#'}>
            COOKIE POLICY
          </Link>
        </div>
      </footer>
      <div className="bg-slate-800 py-5 text-center">
        <p className="sm:text-sm text-lg text-white uppercase font-bold">
          Copyright © 2022 - All right reserved by Anjuli AutoMobiles Pvt Ltd.
        </p>
      </div>
    </>
  );
};

export default Footer;
