import React from 'react';
import './Navigation.css';
const Navigation = ({ route, routeChange }) => {
    return (
        <nav >
            {
                route !== "home"
                    ? <div className='navCss'>
                        <p className='f3 link dim black underline pa3 pointer' onClick={() => routeChange('signin')}>Sign in</p>
                        <p className='f3 link dim black underline pa3 pointer' onClick={() => routeChange('signup')}>Sign up</p>
                    </div>
                    : <div className='navCss'>
                        <p className='f3 link dim black underline pa3 pointer' onClick={() => routeChange('signin')}>Sign out</p>
                    </div>
            }
        </nav>
    );
}
export default Navigation