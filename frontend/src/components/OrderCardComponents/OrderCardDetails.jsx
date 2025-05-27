import React from 'react';

function OrderCardDetails({ order }) {
    return (
        <div className="p-4 bg-white/50 rounded-b-md">
            <div className="space-y-3">
                {Object.entries(order.drains).map(([drainId, drain]) => (
                    <div key={drainId} className="bg-white/80 p-3 rounded-md shadow-sm">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="font-medium">Size:</div>
                            <div>{drain.size}</div>
                            
                            <div className="font-medium">Quantity:</div>
                            <div>{drain.total}</div>
                            
                            {drain.box && (
                                <>
                                    <div className="font-medium">Box Type:</div>
                                    <div>{drain.box}</div>
                                </>
                            )}
                            
                            {drain.dome && (
                                <>
                                    <div className="font-medium">Dome Type:</div>
                                    <div>{drain.dome}</div>
                                </>
                            )}
                            
                            {drain.ring && (
                                <>
                                    <div className="font-medium">Ring Type:</div>
                                    <div>{drain.ring}</div>
                                </>
                            )}
                            
                            {drain.seal && (
                                <>
                                    <div className="font-medium">Seal:</div>
                                    <div>{drain.seal}</div>
                                </>
                            )}
                            
                            {drain.coatings && (
                                <>
                                    <div className="font-medium">Coatings:</div>
                                    <div>{drain.coatings}</div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default OrderCardDetails;