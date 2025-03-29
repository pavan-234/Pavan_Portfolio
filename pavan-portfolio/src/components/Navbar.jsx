    import React from "react";
    import { Link } from "react-scroll";

    const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Varanasi Pavan Kalyan
            </h1>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6">
            {[
                { name: "Home", to: "hero" },
                { name: "About", to: "about" },
                { name: "Skills", to: "skills" },
                { name: "Projects", to: "projects" },
                { name: "Contact", to: "contact" },
            ].map((item) => (
                <li key={item.to}>
                <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 cursor-pointer transition"
                >
                    {item.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>
        </nav>
    );
    };

    export default Navbar;
