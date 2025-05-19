// Main card layout
import { useState } from 'react'

function OrderCard({order}) {
    return (
        <div className="w-[95%] mx-auto p-2 rounded-md shadow-md border">
            <p>Order #: {order.orderNumber}</p>
            <p>Ship Date: {order.orderDate}</p>
        </div>
    );
  }
  
export default OrderCard;