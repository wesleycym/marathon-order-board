import React, { useState } from 'react';

function DomeType({selectedDome, setSelectedDome, customDome, setCustomDome}) {

    const domeTypes = [
        'Aluminum Dome',
        'Black Plastic Dome',
        'Blue Plastic Dome',
        'Other...'  
    ];

    const handleDomeChange = (e) => {
        const value = e.target.value;

        if (value === 'Other...') {
            setSelectedDome('Other...');
            setCustomDome(''); // Clear previous custom text
        } else {
            setSelectedDome(value);  // Regular box selection
            setCustomDome('');      // Clear customBox when switching back to standard options
        }
    };

    const handleCustomInputChange = (e) => {
        setCustomDome(e.target.value);
    };

    return (
        <div>
            
            {domeTypes.map((dome) => (
                <label key = {dome}>
                    <input
                        type = "radio"
                        name = "domeType"
                        value = {dome}
                        checked = {selectedDome === dome}
                        onChange = {handleDomeChange}
                    />
                    {dome}
                </label>
            ))}
            {/* If 'Other' dome type is selected */ }
            {selectedDome === 'Other...' && (
                <input
                    type = 'text'
                    placeholder = 'Enter dome type'
                    value = {customDome}
                    onChange = {handleCustomInputChange}
                />
            )}

        </div>
    );
}

export default DomeType;