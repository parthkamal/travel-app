import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import '../style/Navbar.css';


const Navbar = () => {

    const [navbarState , setNavbarState] = useState('navbar show'); 


    const showNavbar = () => setNavbarState('navbar show');
    const closeNavbar = ()=> setNavbarState('navbar');

    return (
        <section className='navbar-section'>
            <header className='header flex'>
                <div className='logo-div'>
                    <a href='#' className='logo flex'>
                        <h1> <MdOutlineTravelExplore className='icon' />travel</h1>
                    </a>
                </div>
                <div className={navbarState}>
                    <ul className='navlist flex'>
                        <li className='navitem'>
                            <a href='#' className='navlink'>home </a>
                        </li>
                        <li className='navitem'>
                            <a href='#' className='navlink'> packages</a>
                        </li>
                        <li className='navitem'>
                            <a href='#' className='navlink'> shop</a>
                        </li>
                        <li className='navitem'>
                            <a href='#' className='navlink'> about</a>
                        </li>
                        <li className='navitem'>
                            <a href='#' className='navlink'>pages </a>
                        </li>
                        <li className='navitem'>
                            <a href='#' className='navlink'>news </a>
                        </li>
                        <button className='btn'>
                            <a href='#'>
                                BOOK NOW
                            </a>
                        </button>
                    </ul>
                    <div className='close-navbar' onClick={closeNavbar}>
                        <AiFillCloseCircle className='icon' />
                    </div>

                </div>
                <div className='toggle-navbar' onClick={showNavbar}>
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
}

export default Navbar;
