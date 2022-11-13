import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bull1 from "../images/bull1.png";
import bull2 from "../images/bull2.png";
import bull4 from "../images/bull4.png";
import bull5 from "../images/bull5.png";


import { Autoplay, Pagination, Navigation } from "swiper";

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
                <SwiperSlide><img className="w-screen h-screen" src={bull1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src={bull2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src={bull4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="w-screen h-screen" src={bull5} alt="" /></SwiperSlide>

            </Swiper> */}
        </>
    );
};

export default Crousel;