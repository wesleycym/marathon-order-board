import React, { useState } from 'react';

function RingTypes({selectedRing, setSelectedRing, customRing, setCustomRing}) {

    const ringTypes = [
        'Aluminum Ring',
        'Black Plastic Ring',
        'Other...'
    ];

    return (
        <div>

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
                    value = {customRing}
                    onChange = {(e) => setCustomRing(e.target.value)}
                />    
            )}
            
        </div>
    );
}

export default RingTypes;