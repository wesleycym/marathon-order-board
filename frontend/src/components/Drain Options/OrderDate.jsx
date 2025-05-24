import React, { useState } from 'react';

function OrderDate({orderDate, setOrderDate, inputClass = ""}) {


    return (
        <div>

            <input 
                type = "text" 
                placeholder = "Ship Date" 
                className = {`order-number-input border rounded px-2 py-1 focus:outline-none ${inputClass}`}
                value = {orderDate}
                onChange={(e) => setOrderDate(e.target.value)}  // Updates state as user types
                />
                
        </div>
    );
}

export default OrderDate;