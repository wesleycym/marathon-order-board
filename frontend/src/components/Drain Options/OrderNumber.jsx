import React, { useState } from 'react';

function OrderNumber({selectedDome, setSelectedDome}) {


    return (
        <div>

            <input 
                type = "text" 
                placeholder = "Order Number" 
                className = "order-number-input" 
                value = {orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}  // Updates state as user types
                />
                
        </div>
    );
}

export default OrderNumber;