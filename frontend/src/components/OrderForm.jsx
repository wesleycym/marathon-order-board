import React, { useEffect, useRef, useState } from 'react';
import '../styles/orderForm.css';


function OrderForm({ onSubmit, onClose }) {

    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number

    const [orderTypes, setOrderTypes] = useState([]); // Tracks selected order types

    const formRef = useRef(null); // Reference for click-outside detection

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
            orderNumber, // Include the order number
            orderTypes, // Include selected order types
        };
        
        onSubmit(newOrder);
        setOrderNumber(''); // Clear order number upon submission
        setOrderTypes([]); // Clear order types after submission
    };

    return (
        <div ref={formRef} className="order-entry-form">
            <h3>New Order</h3>

            <form onSubmit={handleSubmit}>

                {/* Order Number Input */}
                <input 
                type = "text" 
                placeholder = "Order Number" 
                className = "order-number-input" 
                value = {orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}  // Updates state as user types
                />


                
                {/* Drains Section */}
{/*
------------------------------------------------------
|                 ADD NEW ORDER                      |
------------------------------------------------------
| Company: [ Marathon ▼]                             |
| Drain Type: [ 3.75 ▼]  // Make it an input field   |
| -------------------------------------------------- |
| Options:                                           |      <- Should refresh when [Add to Order is clicked]
|  [ ] Tape     [X] AL Dome    [X] AL Ring           |
|  [X] TPO      [ ] PVC                              |
| -------------------------------------------------- |
| Quantity: [ 36 ]                                   |
| [ Add to Order ]                                   |
------------------------------------------------------
|                   ORDER SUMMARY                    |
| -------------------------------------------------- |
| Marathon, Aluminator                               |
| 3.75 AL Dome AL Ring TPO - 36  | [Remove]          |
| 3.625 Tape Blue Dome Black Ring PVC - 25 | [Remove]|
| -------------------------------------------------- |
|                   [Submit Order]                   |
------------------------------------------------------
*/}

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