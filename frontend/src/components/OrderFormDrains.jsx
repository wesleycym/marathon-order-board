import React, { useState } from 'react';


function OrderFormDrains({}) {

{/*###################################################################*/}

    // Tracking Box type
    const boxTypes = ['Aluminator', 
        'Marathon', 
        'TruFast',
        'MuleHide', 
        'ABC Catalog', 
        'TopShield', 
        'Hytech',
        'IB', 
        'Garlock', 
        'Plain',
        'Other...'
    ];
    const [selectedBox, setSelectedBox] = useState('');


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

            {/* Box Types */}
            <h4>Box Types</h4>
            {boxTypes.map((box) => (
                <label key = {box}>
                    <input
                        type = "radio"
                        name = "boxType"
                        value = {box}
                        checked = {selectedBox === box}
                        onChange = {(e) => setSelectedBox(e.target.value)}
                    />
                    {box}
                </label>
            ))}
            {/* If 'Other' box type is selected */ }
            {selectedBox === 'Other...' && (
                <input
                    type = "text"
                    placeholder = "Other..."
                    value = {selectedBox}
                    onChange = {(e) => setSelectedBox(e.target.value)}
                />
            )}

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
                    placeholder = 'Enter dome type'
                    value = {selectedDome === 'Other...' ? selectedDome : ''}
                    onChange = {(e) => setSelectedDome(e.target.value)}
                />
            )}

            {/* Ring Types */}
            <h4> Ring Types </h4>
            {ringTypes.map((ring) => (
                <label key = {ring}>
                    <input
                        type = "radio"
                        name = "ringType"
                        value = {ring}
                        checked = {selectedRing === ring}
                        onChange = {(e) => setSelectedRing(e.target.value)}
                    />
                    {ring}
                </label>
            ))}
            {/* If 'Other' ring type is selected */ }
            {selectedRing === 'Other...' && (
                <input
                    type = 'text'
                    placeholder = 'Enter ring type'
                    value = {selectedRing === 'Other...' ? selectedRing : ''}
                    onChange = {(e) => setSelectedRing(e.target.value)}
                />    
            )}

            {/* Coating Types */}
            <h4> Coating Types </h4>
            {Object.keys(selectedCoatings).map((coating) => (
                <label key = {coating}>
                    <input
                        type = "radio"
                        name = "coatingOptions"
                        checked = {selectedCoatings[coating]}
                        onChange = {() => setSelectedCoatings({
                            TPO: false, 
                            PVC: false,
                            Asphalt: false,
                            [coating]: true // Set the selected coating to be true
                        })}
                    />
                    {coating}
                </label>
            ))}

            {/* Tape Options */}
            <h4> Tape Options </h4>
            {Object.keys(tapeOptions).map((tape) => (
                <label key = {tape}>
                    <input
                        type = "radio"
                        name = "tapeOptions"
                        checked = {tapeOptions[tape]}
                        onChange = {() => setTapeOptions({
                            tape: false,
                            [tape]: true
                        })}
                    />
                    {tape}
                </label>
            ))}


            </div>
        </div>
    );
}

export default OrderFormDrains;