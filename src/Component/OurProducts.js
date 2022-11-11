import React from 'react';
import bull1 from '../images/bull1.png';
import bull2 from '../images/bull2.png';
import bull4 from '../images/bull4.png';
import bull5 from '../images/bull5.png';
import bull6 from '../images/bull6.jpg';
import bull7 from '../images/bull7.jpg';

const OurProducts = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center my-4'>
                <img className='mx-auto' width={90} src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                <h1 className='text-3xl text-white'>Our Products</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-gray-100 text-center rounded-md text-black p-9'>
                    <img className='mx-auto p-3 my-3 rounded-md' src={bull1} />
                    <h3 className='text-2xl mb-2 font-bold'>Largest Dealership</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div className='bg-white text-center rounded-md text-black p-9 border-b-8 border-black'>
                    <img className='mx-auto p-3 my-3' src={bull2} />
                    <h3 className='text-2xl mb-2 font-bold'>Largest Dealership</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div className='bg-gray-100 text-center rounded-md text-black p-3 border-b-8 border-black'>
                    <img className='mx-auto p-3 my-3' src={bull4} />
                    <h3 className='text-2xl mb-2 font-bold'>Largest Dealership</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img className='mx-auto p-3 my-3' src={bull5} />
                    <h3 className='text-2xl mb-2 font-bold'>Largest Dealership</h3>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
            </div>
            <div className='my-5 text-center'>
                <button className='uppercase py-4 px-3 bg-sky-600 rounded-tl-lg rounded-br-lg font-bold text-white'>See all producs</button>
            </div>
        </div>
    );
};

export default OurProducts;