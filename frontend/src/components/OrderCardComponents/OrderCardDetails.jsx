// Shows contents of the order
// Shows contents of the order

function OrderCardDetails( {order}) {

    return (
        <div>
            <h1>Order Details</h1>
            { Object.entries(order.drains).map(([drainId, drain]) => (
                <div key={drainId} className="">
                    <div className="">
                        <div className="font-medium">Size:</div>
                        <div>{drain.size}</div>
                    
                        <div className="font-medium">Quantity:</div>
                        <div>{drain.quantity}</div>
                        
                        <div className="font-medium">Box Type:</div>
                        <div>{drain.box}</div>

                        <div className="font-medium">Dome Type:</div>
                        <div>{drain.dome}</div>

                        <div className="font-medium">Ring Type:</div>
                        <div>{drain.ring}</div>
                        
                        <div className="font-medium">Seal:</div>
                        <div>{drain.seal}</div>

                        <div className="font-medium">Coatings:</div>
                        <div>{drain.coatings}</div>
                    
                    </div>

                </div>
            ))}
        </div>
    )
}