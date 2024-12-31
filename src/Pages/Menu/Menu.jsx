import React from 'react';
import {  Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ManuCategory from './MenuCategory/ManuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"/>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"/>
            {/* offered menu items */}
            <ManuCategory items={offered}/>
            {/* dessert menu items */}
            <ManuCategory img={dessertImg} items={desserts} title={"dessert"}/>
            {/* pizza menu */}
            <ManuCategory img={pizzaImg} items={pizza} title={"pizza"}/>
            {/* salad menu */}
            <ManuCategory img={saladImg} items={salad} title={"salad"}/>
            {/* soup menu */}
            <ManuCategory img={soupImg} items={soup} title={"soup"}/>
        </div>
    );
};

export default Menu;