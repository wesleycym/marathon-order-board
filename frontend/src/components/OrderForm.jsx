
import React, { useEffect, useRef, useState } from 'react';
import '../styles/OrderForm.css';
import ClickOutsideWrapper from './ClickOutsideWrapper'; // Import ClickOutsideWrapper -> Click outside to close
import OrderFormDrains from './OrderFormDrains';
import OrderNumber from './Drain Options/OrderNumber';
import OrderSummary from './OrderSummary';



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
    const [drainEntries, setDrainEntries] = useState({}); // Using a hash map to track multiple drain entries
    const [currentDrain, setCurrentDrain] = useState(createNewDrain()); // New drain entry


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
        setCurrentDrain(createNewDrain()); // Clear current drain upon submission
    };

    return (

        <ClickOutsideWrapper onOutsideClick={onClose}>
            <div className="order-entry-form">
                <h3>New Order</h3>

                <form onSubmit={handleSubmit}>

                    <h4>Order Number</h4>
                    <OrderNumber selectedDome={orderNumber} setSelectedDome={setOrderNumber} />

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
                    <OrderSummary drainEntries={drainEntries} />

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