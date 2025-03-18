import React, { useState } from 'react';


function OrderFormDrains({}) {

{/*###################################################################*/}
    // Tracking Drain Size 
    const [drainSize, setDrainSize] = useState('');

    // Tracking the amount
    const [amount, setAmount] = useState('');

    // Dome type selection
    const domeTypes = [
        'Aluminum Dome',
        'Black Plastic Dome',
        'Blue Plastic Dome',
        'Other...'  
    ];
    const [selectedDome, setSelectedDome] = useState(''); // Tracking the selected dome
    const [customDome, setCustomDome] = useState(''); // Incase there is a custom dome

    // Ring type selection
    const ringTypes = [
        'Aluminum Ring',
        'Black Plastic Ring',
        'Other...'
    ];
    const [selectedRing, setSelectedRing] = useState(''); // Tracking the selected ring
    const [customRing, setCustomRing] = useState(''); // Incase there is a custom ring

    // Optional Coating type selection
    const [selectedCoatings, setSelectedCoatings] = useState({
        TPO: false,
        PVC: false,
        Aslphalt: false
    });

    // Optional Tape selection
    const [tapeOptions, setTapeOptions] = useState({
        tape: false
    });

{/*###################################################################*/}


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