// Main card layout
import { useState } from 'react'

function OrderCard({order}) {
    return (
        <div className="order-card">
            <p>Order #: {order.orderNumber}</p>
        </div>
    );
  }
  
export default OrderCard;