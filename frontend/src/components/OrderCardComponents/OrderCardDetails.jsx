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
                        
                        
                        {drain.box && (
                            <>  
                            <div className="font-medium">Box Type:</div>
                            <div>{drain.box}</div>
                            </>
                        )}

                        { drain.dome && (   
                            <>
                            <div className="font-medium">Dome Type:</div>
                            <div>{drain.dome}</div>
                            </>
                        )}

                        { drain.ring && (
                            <>
                            <div className="font-medium">Ring Type:</div>
                            <div>{drain.ring}</div>
                            </>
                        )}
                        
                        { drain.seal && (
                            <>
                            <div className="font-medium">Seal:</div>
                            <div>{drain.seal}</div>
                            </>
                        )}
                        

                        {drain.seal && (
                            <> // just because jsx elements need to be wrapped in a parent element
                                <div className="font-medium">Coatings:</div>
                                <div>{drain.coatings}</div>
                            </>
                        )}
                    
                    </div>

                </div>
            ))}
        </div>
    )
}