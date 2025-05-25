import React from 'react';
import {
    boxAbbreviations,
    domeAbbreviations,
    ringAbbreviations,
    coatingAbbreviations,
    sealAbbreviations,
    tapeAbbreviations
} from '../../lib/abbreviations';

//          Component Info:
//  Sub component for OrderFormDrains
//  Will display the order summary, containing the drains made from the OrderFormDrains


function OrderSummary({ drainEntries, onRemoveDrain }) {

    const formatDrainSummary = (drainData) => {
        
        const parts = []; // Array to hold the formatted parts

        // Lookup abbreviations from dictionaries
        if (drainData.total) parts.push(drainData.total); // Quantity
        if (drainData.box) parts.push(boxAbbreviations[drainData.box] || drainData.box); // Box
        if (drainData.size) parts.push(drainData.size);   // Drain Size
        if (drainData.coatings) parts.push(coatingAbbreviations[drainData.coatings] || drainData.coatings); // Coatings
        if (drainData.seal) parts.push(sealAbbreviations[drainData.seal] || drainData.seal); // Seal
        if (drainData.dome) parts.push(domeAbbreviations[drainData.dome] || drainData.dome); // Dome
        if (drainData.ring) parts.push(ringAbbreviations[drainData.ring] || drainData.ring); // Ring

        return parts.join(' '); // Create the string
    };

    return (
        <div className="order-summary">
            <h4>Order Summary</h4>

            {Object.entries(drainEntries).length === 0 ? (
                <p>No drains added yet.</p>
            ) : (
                <ul>
                    {Object.entries(drainEntries).map(([drainId, drainData]) => (
                        <li key={drainId}>
                            {formatDrainSummary(drainData)}
                            <button onClick={() => onRemoveDrain(drainId)} style={{ marginLeft: '10px' }} 
                            className = "transition duration-200 transform hover:scale-110 hover:rotate-3 will-change-transform origin-center" >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default OrderSummary;