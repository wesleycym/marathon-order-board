import React, { useState } from 'react';

function CoatingType({selectedCoatings, setSelectedCoatings}) {

    const coatingOptions = ['TPO', 'PVC', 'Asphalt'];

    return (
        <div>
            
            {coatingOptions.map((coating) => (
                <label key = {coating} className="coating-label"> 
                    <input
                        type = "radio"
                        name = "coatingOptions"
                        value = {coating}
                        checked = {selectedCoatings === coating}
                        onChange = {(e) => setSelectedCoatings(e.target.value)}
                    /> 
                    {coating}
                </label>
            ))}

        </div>
    );
}

export default CoatingType;