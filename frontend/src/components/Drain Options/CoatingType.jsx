import React, { useState } from 'react';

function CoatingType({selectedCoatings, setSelectedCoatings}) {

    return (
        <div>
            {Object.keys(selectedCoatings).map((coating) => (
                <label key = {coating}>
                    <input
                        type = "radio"
                        name = "coatingOptions"
                        checked = {selectedCoatings[coating]}
                        onChange = {() => setSelectedCoatings({
                            TPO: false, 
                            PVC: false,
                            Asphalt: false,
                            [coating]: true // Set the selected coating to be true
                        })}
                    />
                    {coating}
                </label>
            ))}
        </div>
    );
}

export default CoatingType;