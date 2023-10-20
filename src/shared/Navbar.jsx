import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import './Navbar.css';
import userDefaultPic from '../assets/user.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();
    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const navLinks = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/register'><li><a>Register</a></li></NavLink>
        <NavLink to='/add-product'><li><a>Add Product</a></li></NavLink>
        <NavLink to='/my-cart'><li><a>My Cart</a></li></NavLink>
    </>

    const handleLogOut = () => {
        logOut().then(() => {
            // Sign-out successful.
            console.log('LogOut successfully');
        }).catch((error) => {
            // An error happened.
            console.error(error);
        });

    }
    return (
        <nav>
            {/* <h2 className="text-3xl">Navbar</h2> */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {
                                navLinks
                            }
                            {/* <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <img src="/logo.jpeg" width={64} alt="" />
                        <a className="btn btn-ghost normal-case text-xl">ElecTech Brand Shop</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                        {/* <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={`/profile`}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || userDefaultPic} />
                            </div>
                        </label>
                    </Link>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <a onClick={handleLogOut} className="btn btn-sm">Log Out</a>
                        </>
                            : <Link to="/login">
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }
                </div>
                <div className="flex-none">
                    {/* Toggle button here */}
                    <button className="btn btn-square btn-ghost">
                        <label className="swap swap-rotate w-12 h-12">
                            <input type="checkbox" onChange={handleToggle}
                                // show toggle image based on localstorage theme
                                checked={theme === "light" ? false : true} />
                            {/* light theme sun image */}
                            <FaSun className="w-8 h-8 swap-on" />
                            {/* dark theme moon image */}
                            <FaMoon className="w-8 h-8 swap-off" />
                        </label>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;