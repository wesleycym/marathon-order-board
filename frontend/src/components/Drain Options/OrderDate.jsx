import React, { useState } from 'react';

function OrderDate({orderDate, setOrderDate}) {


    return (
        <div>

            <input 
                type = "text" 
                placeholder = "Ship Date" 
                className = "order-number-input" 
                value = {orderDate}
                onChange={(e) => setOrderDate(e.target.value)}  // Updates state as user types
                />
                
        </div>
    );
}

export default OrderDate;