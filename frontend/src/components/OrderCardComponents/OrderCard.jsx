// Main card layout
import { useState } from 'react'

import { boxTypeColors } from './OrderCardStyling';

function OrderCard({order}) {
    return (
        <div className="w-[95%] mx-auto p-2 rounded-md shadow-md border">
            <p>Order #: {order.orderNumber}</p>
            <p>Ship Date: {order.orderDate}</p>
        </div>
    );
  }
  
export default OrderCard;