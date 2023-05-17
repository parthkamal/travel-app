import React from 'react';
import '../style/Footer.css';
import video from '../video/video.mp4';
import { MdOutlineTravelExplore } from 'react-icons/md';
import {AiOutlineRight} from 'react-icons/ai';



const Footer = () => {
    return (
        <div className='footer-container'>
            <video src={video} muted autoPlay loop type='video/mp4' />
            <div className='footer-content'>
                <div className='main-card'>
                    <div className='footer-description'>
                        <h1> <MdOutlineTravelExplore className='icon' />travel</h1>
                        <div>
                       Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </div>
                    <div className='footer-link'>
                    <div className='agency'>
                        <h4>Our agency</h4>
                        <ul>
                            <li><AiOutlineRight/>services</li>
                            <li><AiOutlineRight/>insurance</li>
                            <li><AiOutlineRight/>agency</li>
                            <li><AiOutlineRight/>tourism</li>
                            <li><AiOutlineRight/>payment</li>

                        </ul>
                    </div>
                    <div className='partners'>
                        <h4>partners</h4>
                        <ul>
                            <li><AiOutlineRight/>booking</li>
                            <li><AiOutlineRight/>rentalcar</li>
                            <li><AiOutlineRight/>hostelworld</li>
                            <li><AiOutlineRight/>trivago</li>
                            <li><AiOutlineRight/>tripadvisor</li>

                        </ul>
                    </div>
                    <div className='last-minute'>
                        <h4>last minute</h4>
                        <ul>
                            <li><AiOutlineRight/>london</li>
                            <li><AiOutlineRight/>california</li>
                            <li><AiOutlineRight/>indonesia</li>
                            <li><AiOutlineRight/>europe</li>
                            <li><AiOutlineRight/>oceania</li>

                        </ul>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
