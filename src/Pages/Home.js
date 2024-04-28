import React from 'react';
import Crousel from '../Component/Crousel';
import OurAdvantage from '../Component/OurAdvantage';
import OurBrand from '../Component/OurBrand';
import OurProducts from '../Component/OurProducts';
import OurService from '../Component/OurService';

const Home = () => {
  return (
    <div>
      <Crousel />
      <OurAdvantage />
      <OurProducts />
      <OurService />
      <OurBrand />
    </div>
  );
};

export default Home;
