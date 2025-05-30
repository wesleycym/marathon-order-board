import React, { useState } from 'react';
import { formatDrainSummary } from '../../lib/formatDrainSummary';

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
            ...prev, // Preserve previous state
            [drainId]: !prev[drainId] // Flip boolean value for the clicked drain
        }));
    };

    return (
        <div
            className="p-4 bg-white/50 rounded-b-md cardTilt-on-hover"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing the card
        >
            <div className="space-y-2">
                {/* Loop through each drain in the order */}
                {Object.entries(order.drains).map(([drainId, drain]) => {
                    const isComplete = completedDrains[drainId]; // Check if this drain is marked complete
                    return (
                        <div
                            key={drainId}
                            onClick={() => toggleComplete(drainId)} // Toggle completion
                            className={`p-2 rounded-md shadow-sm text-sm font-medium cursor-pointer transition-colors duration-200 ${
                                isComplete 
                                ? 'bg-green-300/80 text-white line-through' // Completed style
                                : 'bg-white/80' // Default style
                            }`}
                        >
                            {/* Display the formatted drain summary */}
                            {formatDrainSummary(drain)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OrderCardDetails;