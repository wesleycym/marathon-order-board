// Main card layout
import { useState } from 'react'

import { boxTypeColors } from './OrderCardStyling';

function OrderCard({order}) {
    // Add the logos to the top right of the card
    
    // Determine the background color
    const firstBoxType = Object.values(order.drains)[0]?.box || 'Plain'; // Pulling the first box type from the order -> Maybe change to pull the most common box type
    const bgClass = boxTypeColors[firstBoxType] || 'bg-white';

    // Determine the quantity of all drains
    const totalDrains = Object.values(order.drains).reduce((sum, drain) => {
        const amount = parseInt(drain.total, 10);
        return sum + (isNaN(amount) ? 0 : amount);
        }, 0);

    // Created set to check if the box type is valid
    const validLogoBoxTypes = new Set([
        'Aluminator',
        'Marathon',
        'TruFast',
        'MuleHide',
        'ABC Catalog',
        'TopShield',
        'Hytech',
    ]);

    return (
        <div className={`wiggle-on-hover w-[95%] mx-auto p-4 rounded-md shadow-md border transition-all duration-150 ${bgClass}`}>

            {/* Top row: logo only */}
            {validLogoBoxTypes.has(firstBoxType) && (
                <div className="flex justify-start">
                <img
                    src={`/images/logos/${firstBoxType}.png`}
                    alt={`${firstBoxType} Logo`}
                    className="h-12 w-auto object-contain"
                />
                </div>
            )}

            {/* Centered order number */}
            <h3 className="text-lg font-bold text-center mb-1 whitespace-nowrap">
                Order #{order.orderNumber}
            </h3>

            <p className="text-sm text-gray-800 text-center">{totalDrains} Drain(s)</p>
            <p className="text-xs italic text-center">Ship Date: {order.orderDate}</p>
        </div>
    );
  }
  
export default OrderCard;