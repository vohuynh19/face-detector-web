import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './icon-brain.png';
const Logo = () => {
    return (
        <div className='ma4 mt0' >
            <Tilt className="Tilt shadow-2  " options={{ max: 55 }} style={{ height: 128, width: 128 }} >
                <div className="Tilt-inner pa2">
                    <img src={brain} alt='brain' width='100' height='100' className='imgCss' />
                </div>
            </Tilt>
        </div>
    );
}
export default Logo