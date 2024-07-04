import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaShoppingBag, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: 'Home', path: '*' },
        {name: "Products", path: '/products'},
        { name: 'Cart', path: '/cart' },
        { name: 'About', path: '/about' },
        
    ];

    return (
        <header className="bg-black  text-white shadow-md w-[100%]">
            <div className="container flex justify-between items-center ">
                <div className=" text-2xl font-bold">
                    <NavLink to="/" >
                    <div className=" bg-slate-900 rounded-r-full">
                        <img src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699533.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user" alt="logo" className='two w-24 md:w-40 rounded-full'/>
                    </div>
                    
                    </NavLink>
                </div>
                <nav className="hidden md:flex space-x-6 md:mr-[30%]">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={`hover:text-gray-400 ${location.pathname === item.path ? 'one underline font-bold text-red-600 text-xl' : ''}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="md:hidden mr-[10%]">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-gray-950 bg-opacity-55 ">
                    <ul className="flex flex-col space-y-4 p-4">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={`hover:text-gray-300 ${location.pathname === item.path ? 'one underline font-bold text-red-600 text-xl ' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
