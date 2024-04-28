import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Crousel = () => {
  return (
    <>
      <Carousel className="mt-[-25px]">
        <Carousel.Item className="mt-[25px]">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1481575184241-4754ea78a1bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwbW90b3JjeWNsZSUyMHJpZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          {/* <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)]"></div> */}
          <Carousel.Caption className="text-white">
            <h3 className="text-3xl font-bold">Anjuli Automobiles Pvt. Ltd</h3>
            <p className="text-lg">Made like a gun, goes like a bullet.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="mt-[25px] relative">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBtb3RvcmN5Y2xlJTIwcmlkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption className="text-white">
            <h3 className="text-3xl font-bold">Anjuli Automobiles Pvt. Ltd</h3>
            <p className="text-lg">Made like a gun, goes like a bullet.</p>
          </Carousel.Caption>
          {/* <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.8)]"></div> */}
        </Carousel.Item>

        <Carousel.Item className="mt-[25px]">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1581661677546-13d490186195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwbW90b3JjeWNsZSUyMHJpZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption className="text-white">
            <h3 className="text-3xl font-bold">Anjuli Automobiles Pvt. Ltd</h3>
            <p className="text-lg">Made like a gun, goes like a bullet.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Crousel;
