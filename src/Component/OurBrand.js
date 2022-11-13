import React from 'react';
import OurBrand1 from '../images/ourbrand-1.png';
import OurBrand2 from '../images/ourbrand-2.png';
import OurBrand3 from '../images/ourbrand-3.png';
import OurBrand4 from '../images/ourbrand-4.png';
import OurBrand5 from '../images/ourbrand-5.png';
import OurBrand6 from '../images/ourbrand-6.png';
import OurBrand7 from '../images/ourbrand-7.png';

const OurBrand = () => {
    return (
        <div className='mt-10'>
            {/* card header area  */}
            <div data-aos="zoom-in" data-aos-duration="1000"
                className='grid md:grid-cols-1 lg:grid-cols-5 gap-x-6 lg:gap-x-0 items-center text-center'>
                <div></div>
                <div></div>
                {/* <div></div> */}
                <div className='border-b-8 rounded-b-3xl border-gray-400 my-16'>
                    <img className='mx-auto' width={130} src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                    <h1 className='text-3xl text-black font-bold mt-2 mb-4'>Our Brands</h1>
                </div>
                <div></div>
                <div></div>
            </div>
            {/* card area  */}
            <div className="container my-14 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-x-6 lg:gap-x-0 items-center">
                        {/* icon 1 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="mb-12 lg:mb-0 relative">
                            <img className=" w-24 h-24 text-blue-600 mx-auto mb-6" src={OurBrand1} alt="customers" />
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>
                        {/* icon 2 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="mb-12 lg:mb-0 relative">
                            <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={OurBrand2} alt="annualRevenue" />
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>
                        {/* icon 3 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="mb-12 md:mb-0 relative">
                            <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={OurBrand3} alt="reviews" />
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>
                        {/* icon 4 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="relative">
                            <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={OurBrand4} alt="tools" />
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>
                        {/* icon 5 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="relative">
                            <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={OurBrand5} alt="tools" />
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>
                        {/* icon 6 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="relative">
                            <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={OurBrand6} alt="tools" />
                            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                        </div>
                        {/* icon 7 */}
                        <div data-aos="zoom-in" data-aos-duration="1000"
                            className="relative">
                            <img className="w-24 h-24 mx-auto mb-6 rounded-lg" src={OurBrand7} alt="tools" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurBrand;