import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaHome, FaList, FaMailBulk, FaMoneyBill, FaSearch, FaShoppingCart } from "react-icons/fa";
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className='menu'>
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome />
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar />
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaMoneyBill />
                            Payment history</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart />
                            My cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd />
                            Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList />
                            My Bookings</NavLink>
                    </li>
                    <div className='divider'></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch/>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <FaShoppingCart/>
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaMailBulk/>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;