import React, { useState } from 'react';

function BoxType({selectedBox, setSelectedBox, customBox, setCustomBox}) {
    
    // Box Options
    const boxTypes = [
        'Aluminator', // ✔
        'Marathon', // ✔
        'TruFast', // ✔
        'MuleHide', // ✔
        'ABC Catalog', // ✔
        'TopShield', // ✔
        'Hytech', // ✔
        'IB', // ✔ -> Made text for it
        'Garlock', // -> Made text for it
        'Plain', // ✔ -> Made text for it
        'Other...' // N/A
    ];

    return (
        <div>

            {/* Box Types */}
            {boxTypes.map((box) => (
                <label key = {box}>
                    <input
                        type = "radio"
                        name = "boxType"
                        value = {box}
                        checked = {selectedBox === box}
                        onChange = {(e) => setSelectedBox(e.target.value)}
                    />
                    {box}
                </label>
            ))}

            {/* If 'Other' box type is selected */ }
            {selectedBox === 'Other...' && (
                <input
                    type = "text"
                    placeholder = "Enter box type"
                    value = {customBox}
                    onChange = {(e) => setCustomBox(e.target.value)}
                />
            )}

        </div>
    );
}

export default BoxType;