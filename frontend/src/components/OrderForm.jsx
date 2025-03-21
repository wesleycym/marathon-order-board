import React, { useEffect, useRef, useState } from 'react';
import '../styles/orderForm.css';
import ClickOutsideWrapper from './ClickOutsideWrapper'; // Import ClickOutsideWrapper -> Click outside to close


function OrderForm({ onSubmit, onClose }) {

    /*
        Database will contain OrderID -> {drainEntries}
    */

    // State to track selected order types
    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number
    const [drainEntries, setDrainEntries] = useState({}); // Using a hash map to track multiple drain entries

    // Need to create a const for the drains -> Map maybe?
    const createNewDrain = () => ({ // Hash map layout for the drain entries
        box: '', // Box type
        drainSize: '', // Drain size
        amount: '', // Amount
        seal: { ProSeal: false, MaxxFlo: false }, // Seal type
        dome: '', // Dome type
        ring: '', // Ring type
        coatings: { TPO: false, PVC: false, Asphalt: false }, // Coating type
        tape: { tape: false } // Tape type
    });

    // Add a new drain entry
    const handleAddDrain = () => {
        const newDrainId = `Drain-${Object.keys(drainEntries).length + 1}`; // Generate new ID for drain entry 
        setDrainEntries((prev) => ({ // Update the drain entries
            ...prev, 
            [newDrainId]: createNewDrain() // Add the new drain entry
        }));
    };

    // Allow drain entries to be edited
    const handleDrainChange = (drainId, key, value) => {
        setDrainEntries((prev) => ({ // Access the drain entries
            ...prev,
            [drainId]: {
                ...prev[drainId],
                [key]: value // Update the value
            }
        }));
    };

    // Remove a drain entry
    const handleRemoveDrain = (drainId) => {
        const updatedDrains = { ...drainEntries };
        delete updatedDrains[drainId]; // Remove the drain entry
        setDrainEntries(updatedDrains); // Update the drain entries
    };

    // Handle form submission
    const handleSubmit = (e) => {

        e.preventDefault();

        const newOrder = { // Create the new order [orderNumber -> drainEntries]
            orderNumber, // Include the order number
            drains: drainEntries // Include all drains in the order
        };
        
        onSubmit(newOrder); // Submit the new order
        setOrderNumber(''); // Clear order number upon submission
        setDrainEntries({}); // Clear drains upon submission
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