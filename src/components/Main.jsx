import React from 'react';
import '../style/Main.css';
import Data from '../data/api';
import Destination from '../components/Destination';


const Main = () => {
    return (
        <section className='main '>
            <div className='sec-title'>
                <h3 className='title'>
                    Most Visited Destinations
                </h3>
            </div>
            <div className='sec-content grid'>
            {
                Data.map((destination) => {
                    return <Destination destination={destination} />
                })
            }
             
            </div>
        </section>
    );
}

export default Main;
