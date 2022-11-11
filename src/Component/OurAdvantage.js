import React from 'react';
import log1 from '../images/logo-1.png';
import log2 from '../images/logo-2.png';
import log3 from '../images/logo-3.png';

const OurAdvantage = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center my-4'>
                <img className='mx-auto' width={90} src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                <h1 className='text-3xl text-white'>Our Advantages</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='bg-gray-100 text-center rounded-md text-black p-9'>
                    <img className='mx-auto p-3 my-3' src={log1} />
                    <h3 className='text-2xl mb-2 font-bold'>Largest Dealership</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div className='bg-white text-center rounded-md text-black p-9 border-b-8 border-black'>
                    <img className='mx-auto p-3 my-3' src={log2} />
                    <h3 className='text-2xl mb-2 font-bold'>Lower Bike Prices</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img className='mx-auto p-3 my-3' src={log3} />
                    <h3 className='text-2xl mb-2 font-bold'>Multipoint Safety</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
            </div>
        </div>
    );
};

export default OurAdvantage;