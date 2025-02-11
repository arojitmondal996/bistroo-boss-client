import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Carousel />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;