import React from 'react';
import { MdRingVolume } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import './header.scss';

const Header = () => {
    return (
        <header id="main-header">
            <img src="./images/logo.png" alt="otlob tabib" />
            <address>
                <a href="tel:+33367675"><i className="icon"><MdRingVolume /></i> 33367675</a>
                <a href="tel:+15167" id="landline"><i className="icon"><FiPhoneCall /></i> 15167</a>
            </address>
        </header>
    );
}

export default Header;
