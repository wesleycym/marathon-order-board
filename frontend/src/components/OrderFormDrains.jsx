import React, { useState } from 'react';


function OrderFormDrains({}) {


    const [selectedBox, setSelectedBox] = useState(''); // Tracking the selected box
    const [drainSize, setDrainSize] = useState(''); // Tracking Drain Size 
    const [amount, setAmount] = useState(''); // Tracking the amount
    const [selectedSeal, setSelectedSeal] = useState({ // Seal type selection
        ProSeal: false,
        MaxxFlo: false
    });
    const [selectedDome, setSelectedDome] = useState(''); // Tracking the selected dome
    const [selectedRing, setSelectedRing] = useState(''); // Tracking the selected ring
    const [selectedCoatings, setSelectedCoatings] = useState({ // Optional Coating type selection
        TPO: false,
        PVC: false,
        Aslphalt: false
    });
    const [tapeOptions, setTapeOptions] = useState({ // Optional Tape selection
        tape: false
    });

    return (
        <div className = "drainType">

            {/* Drain Size Input */}
            <h3>Drain Size</h3>
            {/* Amount */}
            <h3>Amount</h3>

            <div className = "Options"> 
            {/* Checklist of all options will go here*/}

            {/* Box Types */}
            <h4>Box Types</h4>



            {/* Seal Options*/}
            <h4>Seal Options</h4>



            {/* Dome Types */}
            <h4> Dome Types </h4>



            {/* Ring Types */}
            <h4> Ring Types </h4>



            {/* Coating Types */}
            <h4> Coating Types </h4>



            {/* Tape Options */}
            <h4> Tape Options </h4>



            <h5> Add to Order </h5>


            
            </div>
        </div>
    );
}

export default OrderFormDrains;