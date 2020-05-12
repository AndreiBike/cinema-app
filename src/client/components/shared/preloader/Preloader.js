import React from 'react';
import preload from '@root/client/images/preloader.svg'

let Preloader = (props) => {
    return (
        <div>
            <img src ={preload} alt = 'preloading...'/>
        </div>
    )
}

export default Preloader;

