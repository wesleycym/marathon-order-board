import React, { useState } from 'react';

function TapeOption({tapeOptions, setTapeOptions}) {

    const tape = ['Yes', 'No'];

    return (
        
        <div>

            {tape.map((tape) => (
                <label key = {tape} className="tape-label">
                    <input
                        type = "radio"
                        name = "tapeOptions"
                        value = {tape}
                        checked = {tapeOptions === tape}
                        onChange = {(e) => setTapeOptions(e.target.value)}
                    />
                    {tape}
                </label>
            ))}

        </div>
    );
}

export default TapeOption;