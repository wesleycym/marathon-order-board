import React, { useEffect, useRef, useState } from 'react';
import '../styles/orderForm.css';


function OrderForm({ onSubmit, onClose }) {

    // State to track selected order types
    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number


    // Click outside to close the form
    const formRef = useRef(null); // Reference for click-outside detection
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                onClose();  // Close the form
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        // Cleanup to remove the event listener when the component unmounts
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            orderNumber, // Include the order number
            orderTypes, // Include selected order types
        };
        
        onSubmit(newOrder);
        setOrderNumber(''); // Clear order number upon submission
    };

    return (
        <div ref={formRef} className="order-entry-form">
            <h3>New Order</h3>

            <form onSubmit={handleSubmit}>

                {/* Order Number Input */}
                <h4 > Order Number </h4>
                {/* Drains Section */}
                <h4> Drains </h4>
                <h4> Order Summary </h4>
                {/* Submit Button */}
                <button type="submit" className="submit-order-button">
                    Submit Order
                </button>

            </form>

            {/* Cancel Button */}
            <button className="close-order-button" onClick={onClose}>
                Cancel
            </button>

        </div>
    );
}

export default OrderForm;