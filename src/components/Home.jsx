import React from 'react';
import '../style/Home.css';
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { SiTripadvisor } from 'react-icons/si'
import {BsListTask} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb';
import video from '../video/video.mp4';


const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'></div>
            <video src={video}  muted autoPlay loop type='video/mp4'></video>
            <div className='home-content container'>
                <div className='text-div'>
                    <span className='small-text'>
                        Our packages
                    </span>
                    <h1 className='home-title'>
                        Search Your Holiday
                    </h1>
                </div>

                <div className='card-div grid'>
                    <div className='destination-input'>
                        <label htmlFor='city'>Search Your destination: </label>
                        <div className='input flex'>
                            <input type='text' placeholder='enter name here...' />
                            <GrLocation className='icon' />
                        </div>
                    </div>
                    <div className='date-input'>
                        <label htmlFor='date'>Search Your date: </label>
                        <div className='input flex'>
                            <input type='date' />
                        </div>
                    </div>
                    <div className='price-input'>
                        <div className='label_total flex'>
                            <label htmlFor='price '>Max Price:</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className='input flex'>
                            <input type='range' max={'5000'} min={10} />
                        </div>
                    </div>
                    <div className='search-options flex'>
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className='home-footer-icons flex'>
                    <div className='right-icons'>
                        <FiFacebook className='icon' />
                        <AiOutlineInstagram className='icon' />
                        <SiTripadvisor className='icon' />
                    </div>
                    <div className='left-icons flex'>
                    <BsListTask className='icon'/>
                    <TbApps className='icon'/>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
