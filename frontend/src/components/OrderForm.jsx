import React, { useEffect, useRef, useState } from 'react';
import '../styles/orderForm.css';
import ClickOutsideWrapper from './ClickOutsideWrapper'; // Import ClickOutsideWrapper -> Click outside to close


function OrderForm({ onSubmit, onClose }) {

    // State to track selected order types
    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number

    // Need to create a const for the drains -> Map maybe?

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            orderNumber, // Include the order number
        };
        
        onSubmit(newOrder);
        setOrderNumber(''); // Clear order number upon submission
    };

    return (
        <ClickOutsideWrapper onOutsideClick={onClose}>
            <div className="order-entry-form">
                <h3>New Order</h3>

                <form onSubmit={handleSubmit}>

                    <h4>Order Number</h4>
                    <h4>Drains</h4>
                    <h4>Order Summary</h4>

                    <button type="submit" className="submit-order-button">
                        Submit Order
                    </button>
                </form>

                <button className="close-order-button" onClick={onClose}>
                    Cancel
                </button>
                
            </div>
        </ClickOutsideWrapper>
    );
}

export default OrderForm;