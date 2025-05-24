import React, { useState } from 'react';

function OrderNumber({orderNumber, setOrderNumber, inputClass = ""}) {


    return (
        <div>

            <input 
                type = "text" 
                placeholder = "Order Number" 
                value = {orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}  // Updates state as user types
                className={`order-number-input border rounded px-2 py-1 focus:outline-none ${inputClass}`}
                />
                
        </div>
    );
}

export default OrderNumber;