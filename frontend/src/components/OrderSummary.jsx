import React from 'react';

function OrderSummary({ drainEntries }) {
    return (
        <div className="order-summary">
            <h4>Order Summary</h4>

            {Object.entries(drainEntries).length === 0 ? (
                <p>No drains added yet.</p>
            ) : (
                Object.entries(drainEntries).map(([drainId, drainData]) => (
                    <div key={drainId} className="drain-summary">
                        <h5>{`Drain #${drainId.split('-')[1]}`}</h5>

                        <ul>
                            {drainData.box && <li><strong>Box Type:</strong> {drainData.box}</li>}
                            {drainData.size && <li><strong>Drain Size:</strong> {drainData.size}</li>}
                            {drainData.total && <li><strong>Amount:</strong> {drainData.total}</li>}
                            {drainData.dome && <li><strong>Dome:</strong> {drainData.dome}</li>}
                            {drainData.ring && <li><strong>Ring:</strong> {drainData.ring}</li>}
                            {drainData.coatings && <li><strong>Coatings:</strong> {drainData.coatings}</li>}
                            {drainData.tape && <li><strong>Tape:</strong> {drainData.tape}</li>}
                            {drainData.seal && <li><strong>Seal:</strong> {drainData.seal}</li>}
                        </ul>

                        <hr /> {/* Divider for readability */}
                    </div>
                ))
            )}
        </div>
    );
}

export default OrderSummary;