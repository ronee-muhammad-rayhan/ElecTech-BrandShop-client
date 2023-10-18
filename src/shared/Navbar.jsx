
const Navbar = () => {
    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>Add Product</a></li>
        <li><a>My Cart</a></li>
    </>
    return (
        <div>
            {/* <h2 className="text-3xl">Navbar</h2> */}
            <div className="navbar bg-base-100 border">
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
                <div className="navbar-center hidden lg:flex border">
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
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;