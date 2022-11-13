import React from 'react';
import bull1 from '../images/bull1.png';
import bull2 from '../images/bull2.png';
import bull4 from '../images/bull4.png';
import bull5 from '../images/bull5.png';



const OurProducts = () => {
    return (
        <div className='container mx-auto'>
            {/* card header area  */}
            <div data-aos="zoom-in" data-aos-duration="1000"
                className='grid md:grid-cols-1 lg:grid-cols-5 gap-x-6 lg:gap-x-0 items-center text-center'>
                <div></div>
                <div></div>
                <div className='my-16 border-b-8 rounded-b-3xl border-gray-400'>
                    <img className='mx-auto' width={130} src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                    <h1 className='text-3xl text-black font-bold mt-2 mb-4'>Our Products</h1>
                </div>
                <div></div>
                <div></div>
            </div>
            {/* card area  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* card 1 */}
                <div data-aos="zoom-in" data-aos-duration="3000"
                    className='bg-gray-100 text-center rounded-md text-black p-9'>
                    <img className='mx-auto p-3 my-3 rounded-md' src={bull1} />
                    <h3 className='text-2xl mb-2 font-bold'>Royal Enfield</h3>
                    <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901.</p>
                </div>
                {/* card 2 */}
                <div data-aos="zoom-in-up" data-aos-duration="3000"
                    className='bg-white text-center rounded-md text-black p-9 border-b-8 border-gray-400'>
                    <img className='mx-auto p-3 my-3' src={bull2} />
                    <h3 className='text-2xl mb-2 font-bold'>Royal Enfield Bullet 350X</h3>
                    <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901.</p>
                </div>
                {/* card 3 */}
                <div data-aos="zoom-in-up" data-aos-duration="3000"
                    className='bg-white text-center rounded-md text-black p-3 border-b-8 border-gray-400'>
                    <img className='mx-auto p-3 my-3' src={bull4} />
                    <h3 className='text-2xl mb-2 font-bold'>Royal Enfield roars</h3>
                    <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901.</p>
                </div>
                {/* card 4 */}
                <div data-aos="zoom-in" data-aos-duration="3000"
                    className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img className='mx-auto p-3 my-3' src={bull5} />
                    <h3 className='text-2xl mb-2 font-bold'>Royal Enfield Gray</h3>
                    <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901.</p>
                </div>
            </div>
            <div className='mb-20 mt-10 text-center'>
                <button className='uppercase py-4 px-3 bg-gray-700 rounded-tl-lg rounded-br-lg font-bold text-gray-300 hover:bg-gray-400 hover:text-black'>See all producs</button>
            </div>
        </div>
    );
};

export default OurProducts;