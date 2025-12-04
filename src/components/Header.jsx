/* eslint-disable no-unused-vars */
import { useDisclosure } from '@mantine/hooks';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Modal, Button } from '@mantine/core';
import React, { Component } from 'react';
import { useState } from 'react';
import {LoginModal,ApplyDeviceModal} from './Modals';


export default function Header() {
    const [Open, setOpen] = useState(false);
    const [openedLogin, { open: openLogin, close: closeLogin }] = useDisclosure(false);
    const [openedApply, { open: openApply, close: closeApply }] = useDisclosure(false);

    return (
        <div className="Header">
            <LoginModal opened={openedLogin} onClose={closeLogin} />
            <ApplyDeviceModal opened={openedApply} onClose={closeApply} />

            <nav>
                <h2>ResQ Team</h2>
                <ul className="Nav-Ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="Header-Btns">
                    <button onClick={openLogin} className="Btn-Login" href="#">Login</button>
                    <button onClick={openApply} className="Btn-Apply" href="#">Apply Now</button>
                </div>
                {Open?<IoIosClose className="svgClose" onClick={() => {setOpen(!Open);}} />:<CiMenuBurger className="svgBurger" onClick={() => { setOpen(!Open);}} />}
                
                {Open && (<div className="Responsive-Menu">
                    <ul className="Menu-Ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>)}
            </nav>
        </div>
    )
}
