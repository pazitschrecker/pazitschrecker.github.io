import classnames from "classnames";
import React, { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";


import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuClasses = classnames('menuItems', { 'menuOpen': menuOpen })
    return (
        <nav className="navbar">
            <div><a className="nav-title" href="/">
                pazit schrecker
            </a></div>

            <div className="menu">
                <div className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <MdClose style={{ color: 'white', cursor: 'pointer' }} size={30} /> : <MdMenu style={{ color: 'white', cursor: 'pointer' }} size={40} />}
                </div>

                <ul
                    className={menuClasses}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#performance">performance</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                    <li className="instagramIcon">
                        <a href="https://instagram.com/pazitrose/" target="_"><CiInstagram style={{ color: 'white', cursor: 'pointer', marginBottom: '-4px' }} size={30} /></a>

                    </li>
                </ul>
            </div>
        </nav>
    );
};