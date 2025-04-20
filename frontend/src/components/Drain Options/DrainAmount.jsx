import React, { useState } from 'react';

function DrainAmount({amount, setAmount}) {

    return (
        
        <div>
            <input 
                type = "text" 
                placeholder = "Amount" 
                value = {amount} // Set to default value ("")
                onChange = {(e) => setAmount(e.target.value)} // Tracking the amount
            />
        </div>
    );
}

export default DrainAmount;