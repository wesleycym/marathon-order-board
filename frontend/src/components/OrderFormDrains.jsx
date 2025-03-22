import React, { useState } from 'react';

import BoxType from './Drain Options/BoxType.jsx';
import CoatingType from './Drain Options/CoatingType.jsx';
import DomeType from './Drain Options/DomeType.jsx';
import DrainAmount from './Drain Options/DrainAmount.jsx';
import RingType from './Drain Options/RingType.jsx';
import TapeOption from './Drain Options/TapeOption.jsx';
import SealOption from './Drain Options/SealOption.jsx';
import DrainSize from './Drain Options/DrainSize.jsx';

function OrderFormDrains({drainId, onAddToOrder}) {

    const [selectedBox, setSelectedBox] = useState(''); // Box Type
    const [selectedDome, setSelectedDome] = useState(''); // Dome Type
    const [selectedRing, setSelectedRing] = useState(''); // Ring Type
    const [selectedCoatings, setSelectedCoatings] = useState(''); // Coating Type
    const [selectedTape, setSelectedTape] = useState(''); // Tape Type
    const [selectedSeal, setSelectedSeal] = useState(''); // Seal Type (ProSeal or MaxxFlo)
    const [drainSize, setDrainSize] = useState(''); // Drain Size
    const [amount, setAmount] = useState(''); // Amount

    // Handle changes for each drain option
    const handleAddToOrder = () => {
        const drainData = {
            box: selectedBox, // Box type
            size: drainSize, // Drain size
            total: amount, // Amount
            dome: selectedDome, // Dome type
            ring: selectedRing, // Ring type
            coatings: selectedCoatings, // Coating type
            tape: selectedTape, // Tape type
            seal: selectedSeal // Seal type
        };

        // Send data back to OrderForm
        onAddToOrder(drainId, drainData); // Add the new drain entry

        // Reset form for new drain entry
        setSelectedBox('');
        setSelectedDome('');
        setSelectedRing('');
        setSelectedCoatings({});
        setSelectedTape({});
        setSelectedSeal('');
        setDrainSize('');
        setAmount('');
    };

    return (
        <div className = "drainEntry">
            <h4>`Drain #${drainId.split('-')[1]}`</h4>

            {/* Drain Size Input */}
            <h3>Drain Size</h3>
            <DrainSize drainSize = {drainSize} setDrainSize = {setDrainSize} />

            {/* Amount */}
            <h3>Amount</h3>
            <DrainAmount amount = {amount} setAmount = {setAmount} />

            <div className = "Options"> 
            {/* Checklist of all options will go here*/}

            {/* Box Types */}
            <h4>Box Types</h4>
            <BoxType selectedBox = {selectedBox} setSelectedBox = {setSelectedBox} />

            {/* Seal Options*/}
            <h4>Seal Options</h4>
            <SealOption selectedSeal = {selectedSeal} setSelectedSeal = {setSelectedSeal} />

            {/* Dome Types */}
            <h4> Dome Types </h4>
            <DomeType selectedDome = {selectedDome} setSelectedDome = {setSelectedDome} />

            {/* Ring Types */}
            <h4> Ring Types </h4>
            <RingType selectedRing = {selectedRing} setSelectedRing = {setSelectedRing} />

            {/* Coating Types */}
            <h4> Coating Types </h4>
            <CoatingType selectedCoatings = {selectedCoatings} setSelectedCoatings = {setSelectedCoatings} />

            {/* Tape Options */}
            <h4> Tape Options </h4>
            <TapeOption tapeOptions = {selectedTape} setTapeOptions = {setSelectedTape} />

            {/* Add to Order Button */}
            <h5> Add to Order </h5>
            <button onClick={handleAddToOrder}>Add to Order</button>

            </div>
        </div>
    );
}

export default OrderFormDrains;