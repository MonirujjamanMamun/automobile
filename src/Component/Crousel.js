import React from 'react';

const Crousel = () => {
    return (
        <div class="carousel w-full h-[700px]">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/hand-drawn-motorcycle-isolated-white-background-monochrome-style_1284-38728.jpg?size=626&ext=jpg&uid=R82700266&ga=GA1.2.1730248368.1666899371&semt=sph" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/illustration-motorcycle-red-color_1308-35859.jpg?size=626&ext=jpg&uid=R82700266&ga=GA1.2.1730248368.1666899371&semt=sph" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/beautiful-brave-woman-is-leaning-her-motobike-tunnel-she-is-holding-helmet_613910-20823.jpg?size=626&ext=jpg&uid=R82700266&ga=GA1.2.1730248368.1666899371&semt=sph" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Crousel;