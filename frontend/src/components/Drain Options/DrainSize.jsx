import React, { useState } from 'react';

function DrainSize({drainSize, setDrainSize}) {

    return (
        
        <div>
            <input 
                type = "text" 
                placeholder = "Drain Size"
                value = {drainSize} // Set to default value ("")
                onChange = {(e) => setDrainSize(e.target.value)} // Tracking the drain size
            />
        </div>
    );
}

export default DrainSize;