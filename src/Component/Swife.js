import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import bull1 from '../images/bull1.png';
import bull2 from '../images/bull2.png';
import bull4 from '../images/bull4.png';
import bull5 from '../images/bull5.png';



const Swife = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper mt-20"
            >
                <SwiperSlide>
                    <img className="w-screen h-screen" src={bull1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen h-screen" src={bull2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen h-screen" src={bull4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen h-screen" src={bull5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen h-screen" src={bull6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-screen h-screen" src={bull7} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Swife;



