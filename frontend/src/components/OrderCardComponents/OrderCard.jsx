// Main card layout
import { useState, useEffect } from 'react'

import { boxTypeColors } from './OrderCardStyling';
import OrderCardDetails from './OrderCardDetails';

function OrderCard({order, autoExpand = false}) {
    const [isExpanded, setIsExpanded] = useState(autoExpand);
    // Determine the background color
    const firstBoxType = Object.values(order.drains)[0]?.box || 'Plain'; // Pulling the first box type from the order -> Maybe change to pull the most common box type
    const bgClass = boxTypeColors[firstBoxType] || 'bg-white';

    // Determine the quantity of all drains | Could modify this to see which box type is used the most
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
        'IB',
        'Garlock',
        'Plain',
    ]);

    return (
        <div className={`cardTilt-on-hover w-[95%] md:min-h-[8rem] mx-auto p-1 rounded-md shadow-md border transition-all duration-150 ${bgClass} will-change-transform origin-center`}>

            {validLogoBoxTypes.has(firstBoxType) && (
                <div className="flex justify-start items-center h-12 pl-2">
                <img
                    src={`${import.meta.env.BASE_URL}images/logos/${firstBoxType}.png`}
                    alt={`${firstBoxType} Logo`}
                    className="h-full max-h-12 w-auto object-contain"
                    style={{ imageRendering: 'crisp-edges' }}
                />
                </div>
            )}

            {/* Centered order number */}
            <h3 className="text-lg font-bold text-center mb-1 whitespace-nowrap">
                Order #{order.orderNumber}
            </h3>

            <p className="text-sm text-gray-800 text-center">{totalDrains} Drain(s)</p>
            <p className="text-xs italic text-center">Ship Date: {order.orderDate}</p>

            {/* Could add a BBag flag to show if bags are made for the order */}

            {/* When the card is expanded, show the order details. Maybe allow people to check which drains have been completed in the order? */}

        </div>
    );
  }
  
export default OrderCard;