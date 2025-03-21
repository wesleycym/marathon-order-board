import React, { useState } from 'react';

function OrderFormDrains({}) {

    // Drain Options -> Keeping track of inputs
    const [selectedBox, setSelectedBox] = useState(''); // Tracking the selected box
    const [drainSize, setDrainSize] = useState(''); // Tracking Drain Size 
    const [amount, setAmount] = useState(''); // Tracking the amount
    const [selectedSeal, setSelectedSeal] = useState({ProSeal: false, MaxxFlo: false}); // Seal type selection
    const [selectedDome, setSelectedDome] = useState(''); // Tracking the selected dome
    const [selectedRing, setSelectedRing] = useState(''); // Tracking the selected ring
    const [selectedCoatings, setSelectedCoatings] = useState({TPO: false, PVC: false, Aslphalt: false}); // Optional Coating type selection
    const [tapeOptions, setTapeOptions] = useState({tape: false}); // Optional Tape selection

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
            {/* Add to Order Button */}
            <h5> Add to Order </h5>

            </div>
        </div>
    );
}

export default OrderFormDrains;