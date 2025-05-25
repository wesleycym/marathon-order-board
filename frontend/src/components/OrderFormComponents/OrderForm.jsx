import React, { useEffect, useRef, useState } from 'react';
import '../../styles/OrderForm.css';
import ClickOutsideWrapper from '../ClickOutsideWrapper'; // Import ClickOutsideWrapper -> Click outside to close
import OrderFormDrains from './OrderFormDrains';
import OrderNumber from '../Drain Options/OrderNumber';
import OrderSummary from './OrderSummary';
import OrderDate from '../Drain Options/OrderDate';
import { toast } from 'react-toastify'; 
//          Component Info:
//  The main component for creating new orders
//  Contains all logic and modules for creating new orders

// valid-orderForm-entries-check:
// Ensure that at least the Order number and Shipping date are entered
//  - Use toastify to notify user and make the UI more user-friendly


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
        seal: ''
    });

    // State to track selected order types
    const [orderNumber, setOrderNumber] = useState(''); // Tracks the entered order number
    const [drainEntries, setDrainEntries] = useState({}); // Using a hash map to track multiple drain entries | DrainID->{drainData}
    const [currentDrain, setCurrentDrain] = useState(createNewDrain()); // New drain entry
    const [orderDate, setOrderDate] = useState(''); // Create a state for the shipping date -> can be used to filter orders

    const [errors, setErrors] = useState({ // State for tracking errors in the form (no orderNumber or orderDate entered)
        orderNumber: false,
        orderDate: false,
    });

    // Helper to remove a drain from the order
    const handleRemoveDrain = (drainId) => {
        const updatedDrains = { ...drainEntries };
        delete updatedDrains[drainId];
        setDrainEntries(updatedDrains);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for valid orderNumber and orderDate
        const newErrors = {
            orderNumber: !orderNumber.trim(),
            orderDate: !orderDate.trim(),
        };

        setErrors(newErrors); // Set them, if any
        const hasErrors = Object.values(newErrors).some((val) => val === true); // Check for specific errors
        if (hasErrors) {
            console.log('Order number and shipping date are required.');

            toast.error('Order number and shipping date are required.', { 
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
            
            return;
        }

        const newOrder = { // Create the new order [orderNumber -> drainEntries]
            orderNumber, // Include the order number
            orderDate, // Include the shipping date
            drains: drainEntries // Include all drains in the order
        };
        
        onSubmit(newOrder); // Submit the new order
        setOrderNumber(''); // Clear order number upon submission
        setOrderDate(''); // Clear shipping date upon submission
        setDrainEntries({}); // Clear drains upon submission
        setCurrentDrain(createNewDrain()); // Clear current drain upon submission
    };

    return (

        <ClickOutsideWrapper onOutsideClick={onClose}>
            <div className="order-entry-form">
                <h1 className="flex justify-center text-[1.1rem] font-semibold text-stone-700">Create new order</h1>

                <form onSubmit={handleSubmit}>
                    
                    <div className="flex items-center justify-center flex-wrap gap-4 p-2">
                        <div className="flex flex-col items-center">
                            <h4 className="text-stone-700 font-medium">Order Number</h4>
                            <OrderNumber orderNumber={orderNumber} setOrderNumber={setOrderNumber} inputClass={errors.orderNumber ? 'border-red-500 ring-2 ring-red-400' : ''} />
                        </div>

                        <p className="text-stone-700">|</p>

                        <div className="flex flex-col items-center">
                            <h4 className="text-stone-700 font-medium">Ship Date</h4>
                            <OrderDate orderDate={orderDate} setOrderDate={setOrderDate} inputClass={errors.orderDate ? 'border-red-500 ring-2 ring-red-400' : ''} />
                        </div>
                    </div>

                    <div className="flex">
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
                        <div className="order-summary">
                            <div className="order-summary-wrapper">
                                <OrderSummary drainEntries={drainEntries} onRemoveDrain={handleRemoveDrain} />
                            </div>
                        </div>
                    </div>

                    {/* Sumbit Button and Cancel Button */}
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