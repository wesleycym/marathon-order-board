import React, { useState } from 'react';

import BoxType from '../Drain Options/BoxType.jsx';
import CoatingType from '../Drain Options/CoatingType.jsx';
import DomeType from '../Drain Options/DomeType.jsx';
import DrainAmount from '../Drain Options/DrainAmount.jsx';
import RingType from '../Drain Options/RingType.jsx';
import TapeOption from '../Drain Options/TapeOption.jsx';
import SealOption from '../Drain Options/SealOption.jsx';
import DrainSize from '../Drain Options/DrainSize.jsx';
import CollapsibleSection from '../CollapsibleSection.jsx';

//          Component Info:
//  Sub component for OrderForm
//  Contains all logic specific to drains and their options


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
        <div className="drainEntry">
            <h4>Current Drain</h4>

            {/* Drain Size Input */}
            <h3>Drain Size</h3>
            <DrainSize drainSize={currentDrain.size} setDrainSize={(value) => setCurrentDrain((prev) => ({ ...prev, size: value }))} />

            {/* Amount */}
            <h3>Amount</h3>
            <DrainAmount amount={currentDrain.total} setAmount={(value) => setCurrentDrain((prev) => ({ ...prev, total: value }))} />

            <div className="Options">
                {/* Box Types */}
                <CollapsibleSection title="Box Types">
                    <BoxType 
                        selectedBox={currentDrain.box} 
                        setSelectedBox={(value) => setCurrentDrain((prev) => ({ ...prev, box: value }))} 
                        customBox={customBox} 
                        setCustomBox={setCustomBox}
                    />
                </CollapsibleSection>

                {/* Seal Options */}
                <CollapsibleSection title="Seal Options">
                    <SealOption 
                        selectedSeal={currentDrain.seal} 
                        setSelectedSeal={(value) => setCurrentDrain((prev) => ({ ...prev, seal: value }))} 
                    />
                </CollapsibleSection>

                {/* Dome Types */}
                <CollapsibleSection title="Dome Types">
                    <DomeType 
                        selectedDome={currentDrain.dome} 
                        setSelectedDome={(value) => setCurrentDrain((prev) => ({ ...prev, dome: value }))} 
                        customDome={customDome} 
                        setCustomDome={setCustomDome}
                    />
                </CollapsibleSection>

                {/* Ring Types */}
                <CollapsibleSection title="Ring Types">
                    <RingType 
                        selectedRing={currentDrain.ring} 
                        setSelectedRing={(value) => setCurrentDrain((prev) => ({ ...prev, ring: value }))} 
                        customRing={customRing} 
                        setCustomRing={setCustomRing}
                    />
                </CollapsibleSection>

                {/* Coating Types */}
                <CollapsibleSection title="Coating Types">
                    <CoatingType 
                        selectedCoatings={currentDrain.coatings} 
                        setSelectedCoatings={(value) => setCurrentDrain((prev) => ({ ...prev, coatings: value }))} 
                    />
                </CollapsibleSection>

                {/* Tape Options */}
                <CollapsibleSection title="Tape Options">
                    <TapeOption 
                        tapeOptions={currentDrain.tape} 
                        setTapeOptions={(value) => setCurrentDrain((prev) => ({ ...prev, tape: value }))} 
                    />
                </CollapsibleSection>

                {/* Add to Order Button */}
                <button onClick={handleAddToOrder}>Add to Order</button>
            </div>
        </div>
    );
}

export default OrderFormDrains;