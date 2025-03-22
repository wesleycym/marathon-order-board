import React, { useState } from 'react';

function RingTypes({selectedRing, setSelectedRing, customRing, setCustomRing}) {

    const ringTypes = [
        'Aluminum Ring',
        'Black Plastic Ring',
        'Other...'
    ];

    const handleRingChange = (e) => {
        const value = e.target.value;

        if (value === 'Other...') {
            setSelectedRing('Other...');
            setCustomRing(''); // Clear previous custom text
        } else {
            setSelectedRing(value);  // Regular box selection
            setCustomRing('');      // Clear customBox when switching back to standard options
        }
    };

    return (
        <div>

            {ringTypes.map((ring) => (
                <label key = {ring}>
                    <input
                        type = "radio"
                        name = "ringType"
                        value = {ring}
                        checked = {selectedRing === ring}
                        onChange = {handleRingChange}
                    />
                    {ring}
                </label>
            ))}
            {/* If 'Other' ring type is selected */ }
            {selectedRing === 'Other...' && (
                <input
                    type = 'text'
                    placeholder = 'Enter ring type'
                    value = {customRing}
                    onChange = {(e) => setCustomRing(e.target.value)}
                />    
            )}
            
        </div>
    );
}

export default RingTypes;