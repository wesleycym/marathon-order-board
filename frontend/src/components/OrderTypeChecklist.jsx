import React from 'react';

/**
 * OrderTypeChecklist Component
 * This component renders a list of checkboxes for selecting order types.
 * It manages the selected options via props for better state management.
 *
 * Props:
 * - orderTypes: An array of selected order types.
 * - setOrderTypes: A function to update the selected order types.
 */

function OrderTypeChecklist({ orderTypes, setOrderTypes }) {
    
    /**
     * Handles changes to the checkbox selections.
     * Adds the selected type to the `orderTypes` array if checked,
     * otherwise removes it from the array if unchecked.
     */
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // Add the selected order type
            setOrderTypes((prev) => [...prev, value]);
        } else {
            // Remove the unselected order type
            setOrderTypes((prev) => prev.filter((type) => type !== value));
        }
    };


    // List of available order types
    const orderOptions = [
        'Aluminator', 'Marathon', 'TruFast',
        'MuleHide', 'ABC Catalog', 'TopShield', 'Hytech',
        'IB', 'Garlock', 'Plain'
    ];

    return (
        <div className="checkbox-group">
            {/* Map through the list of order types to create checkboxes */}
            {orderOptions.map((type) => (
                <div key={type} className="checkbox-item">
                    <input
                        type="checkbox"
                        id={type}            // Unique ID for each checkbox
                        name={type}         // Ensures proper grouping in form submissions
                        value={type}        // Value for tracking selected options
                        checked={orderTypes.includes(type)}  // Tracks checked state
                        onChange={handleCheckboxChange}       // Handles checkbox state change
                    />
                    <label htmlFor={type}>{type}</label>
                </div>
            ))}
        </div>
    );
}

export default OrderTypeChecklist;