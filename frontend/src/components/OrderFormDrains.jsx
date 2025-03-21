import React, { useState } from 'react';

function OrderFormDrains({drainId, drainData, onChange, onRemove}) {

    // Handle changes for each drain option
    const handleChange = (key, value) => {
        onChange(drainId, key, value);
    };

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