import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>

            <footer className={`footer p-10 text-white bg-[#20262f] mt-20`} >
                <div className='text-center'>
                    <img width="60" height="60" viewBox="0 0 24 24" className="mx-auto rounded-sm" src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                    <p className='text-lg'>Anjuli Automobiles Pvt Ltd.<br />Providing reliable tech since 2001</p>
                </div>
                <div className='sm:mx-auto'>
                    <span className="text-lg text-white uppercase font-black">Services</span>
                    <Link to={'#'} className="">ONLINE BOOKING</Link>
                    <Link to={'#'}>REFUNDABLE BOOKING AMOUNT</Link>
                    <Link to={'#'}>HOME BOOKING & DELIVER</Link>
                    <Link to={'#'}>PICK UP & DROP FACILITY</Link>
                    <Link to={'#'}>FREE TEST RIDE AT HOME</Link>
                </div>
                <div>
                    <span className="text-lg text-white uppercase font-black">Company</span>
                    <Link to={'/shop'}>SHOP</Link >
                    <Link to={'/news'}>NEWS</Link>
                    <Link to={'/contact'}>CONTACT</Link>

                </div>
                <div>
                    <span className="text-lg text-white uppercase font-black">Legal</span>
                    <Link to={'#'}>TERMS OF USE</Link>
                    <Link to={'#'}>PRIVACY POLICY</Link>
                    <Link to={'#'}>COOKIE POLICY</Link>
                </div>

            </footer>
            <div className='bg-slate-800 py-5 text-center'>
                <p className="sm:text-sm text-lg text-white uppercase font-bold">Copyright © 2022 - All right reserved by Anjuli AutoMobiles Pvt Ltd.</p>
            </div>
        </>
    );
};

export default Footer;