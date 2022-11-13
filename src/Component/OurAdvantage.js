import React from 'react';
import log1 from '../images/logo-1.png';
import log2 from '../images/logo-2.png';
import log3 from '../images/logo-3.png';

const OurAdvantage = () => {
    return (
        <div className='container mx-auto mt-10'>
            {/* card header area  */}
            <div data-aos="zoom-in" data-aos-duration="1000"
                className='grid md:grid-cols-1 lg:grid-cols-5 gap-x-6 lg:gap-x-0 items-center text-center'>
                <div></div>
                <div></div>
                <div className='my-16 border-b-8 rounded-b-3xl border-gray-400'>
                    <img className='mx-auto' width={130} src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                    <h1 className='text-3xl text-black font-bold mt-2 mb-4'>Our Advantages</h1>
                </div>
                <div></div>
                <div></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* card 1  */}
                <div data-aos="flip-left" data-aos-duration="3000"
                    className='bg-gray-100 text-center rounded-md text-black p-9 sm:mx-2'>
                    <img className='mx-auto p-3 my-3' src={log1} />
                    <h3 className='text-2xl mb-2 font-bold'>Largest Dealership</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                {/* card 2  */}
                <div data-aos="zoom-in-up" data-aos-duration="3000"
                    className='bg-white text-center rounded-md text-black p-9 border-b-8 border-gray-400 sm:mx-2'>
                    <img className='mx-auto p-3 my-3' src={log2} />
                    <h3 className='text-2xl mb-2 font-bold'>Lower Bike Prices</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                {/* card 3  */}
                <div data-aos="flip-left" data-aos-duration="3000"
                    className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img className='mx-auto p-3 my-3' src={log3} />
                    <h3 className='text-2xl mb-2 font-bold'>Multipoint Safety</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
            </div>
        </div>
    );
};

export default OurAdvantage;