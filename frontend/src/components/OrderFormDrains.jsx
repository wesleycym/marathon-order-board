import React, { useState } from 'react';

import BoxType from './Drain Options/BoxType.jsx';
import CoatingType from './Drain Options/CoatingType.jsx';
import DomeType from './Drain Options/DomeType.jsx';
import DrainAmount from './Drain Options/DrainAmount.jsx';
import RingType from './Drain Options/RingType.jsx';
import TapeOption from './Drain Options/TapeOption.jsx';
import SealOption from './Drain Options/SealOption.jsx';
import DrainSize from './Drain Options/DrainSize.jsx';

function OrderFormDrains({ drainId, currentDrain, setCurrentDrain, drainEntries, setDrainEntries, createNewDrain }) {

    // Custom entries
    const [customBox, setCustomBox] = useState('');
    const [customDome, setCustomDome] = useState('');
    const [customRing, setCustomRing] = useState('');

    // Handle changes for each drain option
    const handleAddToOrder = () => {
        const finalBoxType = customBox || currentDrain.box;  // Prioritize customBox if present
        const finalDomeType = customDome || currentDrain.dome;  // Prioritize customDome if present
        const finalRingType = customRing || currentDrain.ring;  // Prioritize customRing if present
    
        const drainData = {
            ...currentDrain,
            box: finalBoxType, // Final box type
            dome: finalDomeType, // Final dome type
            ring: finalRingType // Final ring type
        };
    
        const newDrainId = `Drain-${Object.keys(drainEntries).length + 1}`;
        setDrainEntries((prev) => ({
            ...prev,
            [newDrainId]: drainData
        }));

        setCustomBox(''); // Reset customBox
        setCustomDome(''); // Reset customDome
        setCustomRing(''); // Reset customRing
    
        setCurrentDrain(createNewDrain); // Reset for a new blank entry
        console.log("Reset drain entries...");
    };

    return (
        <div className = "drainEntry">
            <h4>Current Drain</h4>

            {/* Drain Size Input */}
            <h3>Drain Size</h3>
            <DrainSize drainSize={currentDrain.size} setDrainSize={(value) => setCurrentDrain((prev) => ({ ...prev, size: value }))} />

            {/* Amount */}
            <h3>Amount</h3>
            <DrainAmount amount={currentDrain.total} setAmount={(value) => setCurrentDrain((prev) => ({ ...prev, total: value }))} />

            <div className = "Options"> 
            {/* Checklist of all options will go here*/}

            {/* Box Types */}
            <h4>Box Types</h4>
            <BoxType selectedBox={currentDrain.box} setSelectedBox={(value) => setCurrentDrain((prev) => ({ ...prev, box: value })) } customBox={customBox} setCustomBox={setCustomBox}/>

            {/* Seal Options*/}
            <h4>Seal Options</h4>
            <SealOption selectedSeal={currentDrain.seal} setSelectedSeal={(value) => setCurrentDrain((prev) => ({ ...prev, seal: value })) } />

            {/* Dome Types */}
            <h4> Dome Types </h4>
            <DomeType selectedDome={currentDrain.dome} setSelectedDome={(value) => setCurrentDrain((prev) => ({ ...prev, dome: value })) } customDome={customDome} setCustomDome={setCustomDome}/>

            {/* Ring Types */}
            <h4> Ring Types </h4>
            <RingType selectedRing={currentDrain.ring} setSelectedRing={(value) => setCurrentDrain((prev) => ({ ...prev, ring: value })) } customRing={customRing} setCustomRing={setCustomRing}/>

            {/* Coating Types */}
            <h4> Coating Types </h4>
            <CoatingType selectedCoatings={currentDrain.coatings} setSelectedCoatings={(value) => setCurrentDrain((prev) => ({ ...prev, coatings: value })) } />

            {/* Tape Options */}
            <h4> Tape Options </h4>
            <TapeOption tapeOptions={currentDrain.tape} setTapeOptions={(value) => setCurrentDrain((prev) => ({ ...prev, tape: value })) } />

            {/* Add to Order Button */}
            <button onClick={handleAddToOrder}>Add to Order</button>

            </div>
        </div>
    );
}

export default OrderFormDrains;