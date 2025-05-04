import React, { useState } from 'react';

function DomeType({selectedDome, setSelectedDome, customDome, setCustomDome}) {

    const domeTypes = [
        'Aluminum Dome',
        'Black Plastic Dome',
        'Blue Plastic Dome',
        'Other...'  
    ];

    return (
        <div>
            
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
                    value = {customDome}
                    onChange = {(e) => setCustomDome(e.target.value)}
                />
            )}

        </div>
    );
}

export default DomeType;