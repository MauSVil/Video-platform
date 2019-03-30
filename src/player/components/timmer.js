import React from 'react';
import './timmer.css'

function Timmer(props){
    return(
        <div className="Timer">
            <p>
                <span>00 / {props.duration}</span>
            </p>
        </div>
    )
}

export default Timmer;