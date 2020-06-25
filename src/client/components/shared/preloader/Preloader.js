import React from 'react';
import './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className = 'preloader-style'>
            <img src ="./assets/preloader.svg" alt = 'preloading...'/>
        </div>
    )
}

export default Preloader;

