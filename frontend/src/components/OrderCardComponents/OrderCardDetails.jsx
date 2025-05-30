import React from 'react';
import { formatDrainSummary } from '../../lib/formatDrainSummary';

function OrderCardDetails({ order }) {
    return (
        <div className="p-4 bg-white/50 rounded-b-md cardTilt-on-hover">
            <div className="space-y-2">
                {Object.entries(order.drains).map(([drainId, drain]) => (
                    <div key={drainId} className="bg-white/80 p-2 rounded-md shadow-sm text-sm font-medium">
                        {formatDrainSummary(drain)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderCardDetails;