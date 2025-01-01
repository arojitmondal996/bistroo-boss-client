import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, handleLogout } = useContext(authContext);

    const logOut = () => {
        handleLogout()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>


        {
            user ?
                <>
                    <span>{user?.displayName}</span>
                    {/* <span>{user?.photo}</span> */}
                    <button onClick={logOut} className='btn btn-ghost'>LogOut</button>
                </> :
                <>
                    <li><Link to="/login">LogIn</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-black fixed text-white opacity-50 z-10 max-w-7xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;