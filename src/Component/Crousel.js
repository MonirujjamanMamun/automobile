import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bull1 from "../images/bull1.png";
import bull2 from "../images/bull2.png";
import bull4 from "../images/bull4.png";



// import { Autoplay, Pagination, Navigation } from "swiper";

import Carousel from 'react-bootstrap/Carousel';

const Crousel = () => {
    return (
        <>
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper sm:w-auto md:w-auto lg:w-auto lg:h-auto"
            >
                <SwiperSlide className="z-30">
                    <div className="bg-buill-one z-20"> hello</div>
                </SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen bg-blend-overlay z-0" src={bull2} alt="" /><span className="mt-[-50px] z-10">Hello</span></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen bg-blend-overlay" src={bull4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen bg-blend-overlay" src={bull5} alt="" /></SwiperSlide>
            </Swiper> */}

            <Carousel className="">
                <Carousel.Item className="mt-[15px]">
                    <img
                        className="d-block w-100 opacity-100 "
                        src={bull1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h3 className="text-3xl font-black">Anjuli Automobiles Pvt. Ltd</h3>
                        <p className="text-lg">Made like a gun, goes like a bullet.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="mt-[15px]">
                    <img
                        className="d-block w-100 opacity-100"
                        src={bull2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="text-3xl font-black">Anjuli Automobiles Pvt. Ltd</h3>
                        <p className="text-lg">Made like a gun, goes like a bullet.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="mt-[15px]">
                    <img
                        className="d-block w-100 opacity-100"
                        src={bull4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="text-3xl font-black">Anjuli Automobiles Pvt. Ltd</h3>
                        <p className="text-lg">Made like a gun, goes like a bullet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Crousel;