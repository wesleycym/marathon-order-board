// Main card layout
import { useState } from 'react'

import { boxTypeColors } from './OrderCardStyling';

function OrderCard({order}) {

    const firstBoxType = Object.values(order.drains)[0]?.box || 'Plain'; // Pulling the first box type from the order -> Maybe change to pull the most common box type
    const bgClass = boxTypeColors[firstBoxType] || 'bg-white';

    return (
        <div className={`w-[95%] mx-auto p-4 rounded-md shadow-md border transition-all duration-150 ${bgClass}`}>
        <h3 className="text-lg font-bold">Order #{order.orderNumber}</h3>
        <p className="text-sm text-gray-800">{Object.keys(order.drains).length} drain(s)</p>
        <p className="text-xs italic">Ship Date: {order.shipDate}</p>
        </div>
    );
  }
  
export default OrderCard;