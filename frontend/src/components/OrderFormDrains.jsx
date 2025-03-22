import React, { useState } from 'react';

import BoxType from './Drain Options/BoxType.jsx';
import CoatingType from './Drain Options/CoatingType.jsx';
import DomeType from './Drain Options/DomeType.jsx';
import DrainAmount from './Drain Options/DrainAmount.jsx';
import RingType from './Drain Options/RingType.jsx';
import TapeOption from './Drain Options/TapeOption.jsx';
import SealOption from './Drain Options/SealOption.jsx';
import DrainSize from './Drain Options/DrainSize.jsx';

function OrderFormDrains({ drainId, currentDrain, setCurrentDrain, onAddToOrder }) {

        // Custom entries
        const [customBox, setCustomBox] = useState('');
        const [customDome, setCustomDome] = useState('');
        const [customRing, setCustomRing] = useState('');
    
        // Handle custom box logic
        const handleBoxChange = (value) => {
            if (value === 'Other...') {
                setCurrentDrain((prev) => ({ ...prev, box: customBox }));
            } else {
                setCurrentDrain((prev) => ({ ...prev, box: value }));
            }
        };

    // Handle changes for each drain option
    const handleAddToOrder = () => {

        const finalBoxType = currentDrain.box === 'Other...' ? customBox : currentDrain.box; // Check if there is a custom box
        const finalDomeType = currentDrain.dome === 'Other...' ? customDome : currentDrain.dome // Check if there is a custom dome
        const finalRingType = currentDrain.ring === 'Other...' ? customRing : currentDrain.ring; // Check if there is a custom ring

        const drainData = {
            ...currentDrain,
            box: finalBoxType, // Box type
            dome: finalDomeType, // Dome type
            ring: finalRingType, // Ring type
        };

        onAddToOrder(drainData); // Add the new drain entry

        // Clear the form
        setCurrentDrain({
            box: '',
            size: '',
            total: '',
            dome: '',
            ring: '',
            coatings: '',
            tape: '',
            seal: ''
        });
        setCustomBox(''); // Clear custom box
        setCustomDome(''); // Clear custom dome
        setCustomRing(''); // Clear custom ring
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
            <BoxType selectedBox={currentDrain.box} setSelectedBox={handleBoxChange} customBox={customBox} setCustomBox={setCustomBox}/>

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