import React, { useState } from 'react';
import { formatDrainSummary } from '../../lib/formatUtils';

// When we implement the database, add a completed field for each drain entry
/*

order = {
  orderNumber: 20252001512,
  orderDate: "2025-05-30",
  drains: {
    "drain-1": {
      size: "3.75",
      box: "Marathon",
      total: 36,
      completed: true <- !!!
    },
    "drain-2": {
      size: "3.625",
      box: "Marathon",
      total: 25,
      completed: false <- !!!
    }
  }
}

 */

function OrderCardDetails({ order }) {
    const [completedDrains, setCompletedDrains] = useState({}); // Track completed drains

    // Helper to toggle completion
    const toggleComplete = (drainId) => {
        setCompletedDrains((prev) => ({
            ...prev,
            [drainId]: !prev[drainId]
        }));
    };

    return (
        <div className="p-4 bg-white/50 rounded-b-md">
            <div className="space-y-3">
                {Object.entries(order.drains).map(([drainId, drain]) => {
                    const isComplete = completedDrains[drainId];
                    return (
                        <div
                            key={drainId}
                            className={`bg-white/80 p-3 rounded-md shadow-sm transition-colors duration-200 cursor-pointer ${
                                isComplete ? 'bg-green-100' : ''
                            }`}
                            onClick={() => toggleComplete(drainId)}
                        >
                            <div className={`mb-2 font-mono text-sm text-gray-600 text-center border-b pb-2 ${
                                isComplete ? 'line-through text-gray-400' : ''
                            }`}>
                                {formatDrainSummary(drain)}
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="font-medium">Size:</div>
                                <div>{drain.size}</div>
                                
                                <div className="font-medium">Quantity:</div>
                                <div>{drain.total}</div>
                                
                                {drain.box && (
                                    <>
                                        <div className="font-medium">Box Type:</div>
                                        <div>{drain.box}</div>
                                    </>
                                )}
                                
                                {drain.dome && (
                                    <>
                                        <div className="font-medium">Dome Type:</div>
                                        <div>{drain.dome}</div>
                                    </>
                                )}
                                
                                {drain.ring && (
                                    <>
                                        <div className="font-medium">Ring Type:</div>
                                        <div>{drain.ring}</div>
                                    </>
                                )}
                                
                                {drain.seal && (
                                    <>
                                        <div className="font-medium">Seal:</div>
                                        <div>{drain.seal}</div>
                                    </>
                                )}
                                
                                {drain.coatings && (
                                    <>
                                        <div className="font-medium">Coatings:</div>
                                        <div>{drain.coatings}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OrderCardDetails;