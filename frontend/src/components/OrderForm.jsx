import React, { useEffect, useRef, useState } from 'react';
import '../styles/orderForm.css';
import OrderTypeChecklist from './OrderTypeChecklist'; // Checklist component for order types

/**
 * OrderForm Component
 * This component manages the "Add New Order" form, which includes:
 * - An order number input
 * - A collapsible checklist for selecting order types
 * - Click-outside detection to automatically close the form
 *
 * Props:
 * - `onSubmit`: Function called when the form is submitted
 * - `onClose`: Function called to close the form (click-outside or cancel button)
 */

function OrderForm({ onSubmit, onClose }) {
    // Tracks whether the order type checklist is expanded or collapsed
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Tracks selected order types
    const [orderTypes, setOrderTypes] = useState([]);

    // Reference for click-outside detection
    const formRef = useRef(null);

    /**
     * Click-Outside Logic:
     * Closes the form when the user clicks anywhere outside the form container.
     */
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

    /**
     * Handles form submission:
     * - Prevents default form behavior
     * - Submits selected order types as a new order
     * - Clears the selected order types after submission
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            orderTypes, // Include selected order types
        };
        
        onSubmit(newOrder);
        setOrderTypes([]); // Clear order types after submission
    };

    return (
        <div ref={formRef} className="order-entry-form">
            <h3>New Order</h3>

            {/* Order Number Input */}
            <input
                type="text"
                placeholder="Order Number"
                className="order-number-input"
            />

            <form onSubmit={handleSubmit}>

                {/* Order Type Section - Collapsible */}
                <div className="order-type">
                    {/* Collapsible Header */}
                    <div
                        className="order-type-header"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <h4>Order Type</h4>
                        <span className="toggle-button">
                            {isCollapsed ? '▼ Show' : '▲ Hide'}
                        </span>
                    </div>

                    {/* Checklist Component - Visible when expanded */}
                    {!isCollapsed && (
                        <OrderTypeChecklist
                            orderTypes={orderTypes}
                            setOrderTypes={setOrderTypes}
                        />
                    )}
                </div>

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