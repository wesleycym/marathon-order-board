import React, { useState } from 'react';

function TapeOption({tapeOptions, setTapeOptions}) {

    return (
        
        <div>

            {Object.keys(tapeOptions).map((tape) => (
                <label key = {tape}>
                    <input
                        type = "radio"
                        name = "tapeOptions"
                        checked = {tapeOptions[tape]}
                        onChange = {() => setTapeOptions({
                            tape: false,
                            [tape]: true
                        })}
                    />
                    {tape}
                </label>
            ))}

        </div>
    );
}

export default TapeOption;