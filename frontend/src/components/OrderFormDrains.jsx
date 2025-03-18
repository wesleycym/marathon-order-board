import React, { useState } from 'react';


function OrderFormDrains({}) {

    // Tracking Drain Size 
    const [drainSize, setDrainSize] = useState('');

    // Tracking the amount
    const [amount, setAmount] = useState('');

    // Tracking Dome type
    const domeTypes = [
        'Aluminum Dome',
        'Black Plastic Dome',
        'Blue Plastic Dome',
        'Other...'  
    ];

    // Tracking Ring type
    const ringTypes = [
        'Aluminum Ring',
        'Black Plastic Ring',
        'Other...'
    ];

    const coatingOptions = [
        'TPO',
        'PVC',
        'Asphalt'
    ];

    const [tapeOptions, setTapeOptions] = useState({
        tape: false
    });


    return (
        <div className = "drainType">

            {/* Specific drain size */}
            <input 
                type = "text" 
                placeholder = "Drain Type" 
            />

            <div className = "Options"> 
            {/* Checklist of all options will go here*/}

            </div>

            {/* Amount */}
            <input 
                type = "text" 
                placeholder = "Amount" 
            />
        </div>
    );
}

export default OrderFormDrains;