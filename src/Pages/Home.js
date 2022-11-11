import React from 'react';
import Crousel from '../Component/Crousel';
import Footer from '../Component/Footer';
import OurAdvantage from '../Component/OurAdvantage';
import OurProducts from '../Component/OurProducts';
import OurService from '../Component/OurService';


const Home = () => {
    return (
        <div>
            <Crousel />
            <OurProducts />
            <OurService />
            <OurAdvantage />
            <Footer />
        </div>
    );
};

export default Home;