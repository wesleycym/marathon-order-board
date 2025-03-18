import React from 'react';
import '../styles/orderForm.css'; // Create this new CSS file for styling

function OrderForm({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Place holder for now
        console.log("Order submitted!");
        onClose(); // Close the form after submission
    };

    return (
        <div className="order-entry-form">
            <h3>New Order</h3>
            <form onSubmit={handleSubmit}>

                <button type="submit" className="submit-order-button">
                    Submit Order
                </button>
                
            </form>

            {/* Close Button */}
            <button className="close-order-button" onClick={onClose}>
                Cancel
            </button>
        </div>
    );
}

export default OrderForm;