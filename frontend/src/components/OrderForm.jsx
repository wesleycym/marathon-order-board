import React, { useEffect, useRef, useState } from 'react';
import '../styles/orderForm.css';
import ClickOutsideWrapper from './ClickOutsideWrapper'; // Import ClickOutsideWrapper -> Click outside to close
import OrderFormDrains from './OrderFormDrains';
import OrderNumber from './Drain Options/OrderNumber';


function OrderForm({ onSubmit, onClose }) {

    /*
        Database will contain OrderID -> {drainEntries}
    */

    // State to track selected order types
    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number
    const [drainEntries, setDrainEntries] = useState({}); // Using a hash map to track multiple drain entries

    // Add a new drain entry
    const handleAddDrain = () => {
        const newDrainId = `Drain-${Object.keys(drainEntries).length + 1}`;
        setDrainEntries((prev) => ({
            ...prev,
            [newDrainId]: {}  // Empty drain entry
        }));
    };

    // Add the drain data to the hash map
    const handleAddToOrder = (drainId, drainData) => {
        setDrainEntries((prev) => ({
            ...prev,
            [drainId]: drainData
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
                    <OrderNumber selectedDome={orderNumber} setSelectedDome={setOrderNumber} />

                    <h4>Drains</h4>
                    {Object.keys(drainEntries).map(([drainId]) => (
                        <OrderFormDrains
                            key = {drainId}
                            drainId = {drainId}
                            onAddToOrder = {handleAddToOrder}
                            onRemove = {handleRemoveDrain}
                        />
                    ))}

                    <button type = "button" onClick = {handleAddDrain}> Add Drain </button>

                    <h4>Order Summary</h4>
                    <pre>{JSON.stringify(drainEntries, null, 2)}</pre>

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