import React, { useState } from 'react';

function SealOption({selectedSeal, setSelectedSeal}) {

    return (

        <div>
            {Object.keys(selectedSeal).map((seal) => (
                <label key = {seal}>
                    <input
                        type = "radio"
                        name = "sealOptions"
                        checked = {selectedSeal[seal]}
                        onChange = {() => setSelectedSeal({
                            ProSeal: false, 
                            MaxxFlo: false,
                            [seal]: true // Set the selected seal to be true
                        })}
                    />
                    {seal}
                </label>
            ))}

        </div>

    );
}

export default SealOption;