import React from "react";
import { CiInstagram } from "react-icons/ci";

import { MdOutlineEmail } from "react-icons/md";

import "./Contact.css";


export const Contact = () => {
    return (
        <footer id="contact" className="containerContact">
            <div className="title">Contact</div>
            <ul className="links">
                <li>            <p>Reach out if you're interest in collaborating, learning more, or just want to say hi!</p>
                </li>
                <li className="link"><MdOutlineEmail />
                    <a href="mailto:pazit.schrecker@gmail.com"><u>pazit.schrecker@gmail.com</u></a>
                </li>
                <li className="link"><CiInstagram />
                    <a href="https://instagram.com/pazitrose/" target="_"><u>@pazitrose</u></a>
                </li>

            </ul>
        </footer>
    );
};