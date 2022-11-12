import React from 'react';
import service1 from '../images/service-logo-1.png';
import service2 from '../images/service-logo-2.png';
import service3 from '../images/service-logo-3.png';
import service4 from '../images/service-logo-4.png';
import service5 from '../images/service-logo-5.png';
import service6 from '../images/service-logo-6.png';

const OurService = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className='text-center my-10'>
                <img className='mx-auto' width={90} src='https://www.anjuliroyalenfield.com/logoo.jpeg' />
                <h1 className='text-3xl text-black font-bold'>Our Service</h1>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* card-1  */}
                <div className='bg-gray-100 text-center rounded-md text-black p-9'>
                    <img width={70} className='mx-auto p-3 my-3' src={service1} />
                    <h3 className='text-2xl mb-2 font-bold'>ONLINE BOOKING</h3>
                    <p>You can book your bike online with minimum amount of Rs 10,000/- Get payment confirmation invoice on your E-mail.</p>
                </div>
                {/* card-2 */}
                <div className='bg-white text-center rounded-md text-black p-9 border-b-8 border-gray-400'>
                    <img width={70} className='mx-auto p-3 my-3' src={service2} />
                    <h3 className='text-2xl mb-2 font-bold'>PICK UP & DROP FACILITY</h3>
                    <p>Your bike needs servicing, do not waste time! Call us for servicing and Get the pick and drop facility at home.</p>
                </div>
                {/* card-3 */}
                <div className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img width={70} className='mx-auto p-3 my-3' src={service3} />
                    <h3 className='text-2xl mb-2 font-bold'>REFUNDABLE BOOKING AMOUNT</h3>
                    <p>Afraid of non refundable bookings. Get your booking done at home or showroom with the refundable amount.</p>
                </div>
                {/* card-4  */}
                <div className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img width={70} className='mx-auto p-3 my-3' src={service5} />
                    <h3 className='text-2xl mb-2 font-bold'>HOME BOOKING & DELIVER</h3>
                    <p>Can’t visit showroom or no time to pick your bike. Get your booking and delivery done at home.
                        Just give us a call.</p>
                </div>
                {/* card-5  */}
                <div className='bg-white text-center rounded-md text-black p-3 border-b-8 border-gray-400'>
                    <img width={70} className='mx-auto p-3 my-3' src={service4} />
                    <h3 className='text-2xl mb-2 font-bold'>FREE TEST RIDE AT HOME</h3>
                    <p>Want a Test Ride but do not have time to visit!
                        Book a Free Test ride and get your
                        Test Ride at home.</p>
                </div>
                {/* card-6  */}
                <div className='bg-gray-100 text-center rounded-md text-black p-3'>
                    <img width={70} className='mx-auto p-3 my-3' src={service6} />
                    <h3 className='text-2xl mb-2 font-bold'>ANJULI AUTOMOBILES</h3>
                    <p>A-15, Block-1, Mathura Rd,
                        Mohan cooperative industrial estate,
                        New Delhi-110044</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;