import React, { useEffect, useRef, useState } from 'react';
import '../../styles/OrderForm.css';
import ClickOutsideWrapper from '../ClickOutsideWrapper'; // Import ClickOutsideWrapper -> Click outside to close
import OrderFormDrains from './OrderFormDrains';
import OrderNumber from '../Drain Options/OrderNumber';
import OrderSummary from './OrderSummary';
import OrderDate from '../Drain Options/OrderDate';

//          Component Info:
//  The main component for creating new orders
//  Contains all logic and modules for creating new orders


function OrderForm({ onSubmit, onClose }) {

    /*
        Database will contain OrderID -> {drainEntries}
    */

    // New drain hashmap
    const createNewDrain = () => ({
        box: '',
        size: '',
        total: '',
        dome: '',
        ring: '',
        coatings: '',
        tape: '',
        seal: ''
    });

    // State to track selected order types
    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number
    const [drainEntries, setDrainEntries] = useState({}); // Using a hash map to track multiple drain entries | DrainID->{drainData}
    const [currentDrain, setCurrentDrain] = useState(createNewDrain()); // New drain entry
    const [orderDate, setOrderDate] = useState(''); // Create a state for the shipping date -> can be used to filter orders

    // Helper to remove a drain from the order
    const handleRemoveDrain = (drainId) => {
        const updatedDrains = { ...drainEntries };
        delete updatedDrains[drainId];
        setDrainEntries(updatedDrains);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = { // Create the new order [orderNumber -> drainEntries]
            orderNumber, // Include the order number
            orderDate, // Include the shipping date
            drains: drainEntries // Include all drains in the order
        };
        
        onSubmit(newOrder); // Submit the new order
        setOrderNumber(''); // Clear order number upon submission
        setDrainEntries({}); // Clear drains upon submission
        setCurrentDrain(createNewDrain()); // Clear current drain upon submission
    };

    return (

        <ClickOutsideWrapper onOutsideClick={onClose}>
            <div className="order-entry-form">
                <h3>New Order</h3>

                <form onSubmit={handleSubmit}>

                    <h4>Order Number</h4>
                    <OrderNumber orderNumber={orderNumber} setOrderNumber={setOrderNumber} />

                    <h4>Ship Date</h4>
                    <OrderDate orderDate={orderDate} setOrderDate={setOrderDate} />

                    <h4>Drains</h4>
                    {/* Render each drain entry */}
                    <OrderFormDrains
                        drainId = 'Current-Drain'
                        currentDrain = {currentDrain}
                        setCurrentDrain = {setCurrentDrain}
                        drainEntries = {drainEntries}
                        setDrainEntries = {setDrainEntries}
                        createNewDrain={createNewDrain}
                    />

                    {/* Order Summary */}
                    <OrderSummary drainEntries={drainEntries} onRemoveDrain={handleRemoveDrain} />

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