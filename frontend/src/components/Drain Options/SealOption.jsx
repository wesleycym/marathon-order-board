import React, { useState } from 'react';

function SealOption({selectedSeal, setSelectedSeal}) {

    const sealOptions = ['ProSeal', 'MaxxFlo']; // Set the seal options

    return (

        <div>

            {sealOptions.map((seal) => (
                <label key = {seal}>
                    <input
                        type = "radio"
                        name = "sealOptions"
                        value = {seal}
                        checked = {selectedSeal === seal}
                        onChange = {(e) => setSelectedSeal(e.target.value)}
                    />
                    {seal}
                </label>
            ))}

        </div>

    );
}

export default SealOption;