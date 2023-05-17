import React from 'react';
import { GrLocation } from 'react-icons/gr';
import '../style/Destination.css';

const Destination = ({ destination }) => {
    const { id, title, imgSrc, location, grade, fees, description } = destination;
    return (
        <div key={id} className='destination-container'>
            <img src={imgSrc} />
            <div className='destination-text'>
                <div className='title-container'>
                    <div className='title'> {title} </div>
                    <div className='location'>
                        <GrLocation />
                        <div>{location}</div>
                    </div>
                </div>
                <hr/>
                <div className='price-container'>
                    <div className='grade'>
                        {grade}
                    </div>
                    <div className='fees'>
                        {fees}
                    </div>
                </div>
                <hr/>
                <div className='description container'>
                    {description}
                </div>
                <button>
                    details
                </button>
            </div>

        </div>
    );
}

export default Destination;
