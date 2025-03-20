import React, { useState } from 'react';


function OrderFormDrains({}) {

{/*###################################################################*/}
    // Tracking Drain Size 
    const [drainSize, setDrainSize] = useState('');

    // Tracking the amount
    const [amount, setAmount] = useState('');

    // Seal type selection
    const [selectedSeal, setSelectedSeal] = useState({
        ProSeal: false,
        MaxxFlo: false
    });

    // Dome type selection
    const domeTypes = [
        'Aluminum Dome',
        'Black Plastic Dome',
        'Blue Plastic Dome',
        'Other...'  
    ];
    const [selectedDome, setSelectedDome] = useState(''); // Tracking the selected dome

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

{/*###################################################################*/}

    return (
        <div className = "drainType">

            {/* Drain Size Input */}
            <input 
                type = "text" 
                placeholder = "Drain Type"
                value = {drainSize} // Set to default value ("")
                onChange = {(e) => setDrainSize(e.target.value)} // Tracking the drain size
            />

            {/* Amount */}
            <input 
                type = "text" 
                placeholder = "Amount" 
                value = {amount} // Set to default value ("")
                onChange = {(e) => setAmount(e.target.value)} // Tracking the amount
            />

            <div className = "Options"> 
            {/* Checklist of all options will go here*/}

            {/* Seal Options*/}
            <h4>Seal Options</h4>
            {Object.keys(selectedSeal).map((seal) => (
                <label key = {seal}>
                    <input
                        type = "radio"
                        name = "sealOptions"
                        checked = {selectedSeal[seal]}
                        onChange = {() => setSelectedSeal({
                            ProSeal: false, 
                            MaxxFlo: false,
                            [seal]: true // Set the selected seal to be true
                        })}
                    />
                    {seal}
                </label>
            ))}

            {/* Dome Types */}
            <h4> Dome Types </h4>
            {domeTypes.map((dome) => (
                <label key = {dome}>
                    <input
                        type = "radio"
                        name = "domeType"
                        value = {dome}
                        checked = {selectedDome === dome}
                        onChange = {(e) => setSelectedDome(e.target.value)}
                    />
                    {dome}
                </label>
            ))}
            {/* If 'Other' dome type is selected */ }
            {selectedDome === 'Other...' && (
                <input
                    type = 'text'
                    placeholder = 'Enter custom dome type'
                    value = {selectedDome === 'Other...' ? selectedDome : ''}
                    onChange = {(e) => setSelectedDome(e.target.value)}
                />
            )}


            </div>
        </div>
    );
}

export default OrderFormDrains;