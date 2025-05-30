// Main card layout
import { useState, useEffect } from 'react'
import { boxTypeColors } from './OrderCardStyling';
import OrderCardDetails from './OrderCardDetails';
import OrderEditModal from './OrderEditModal';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { formatDrainSummary } from '../../lib/formatUtils';

function OrderCard({order, autoExpand = false, onDelete, onUpdate}) {
    const [isExpanded, setIsExpanded] = useState(autoExpand);
    const [showEditModal, setShowEditModal] = useState(false);
    
    // Effect to handle card expansion when props change
    useEffect(() => {
        if (autoExpand) {
            setIsExpanded(false); // Initally collapse the card
            const timeout = setTimeout(() => setIsExpanded(true), 50); // Delay expansion to allow for animation
            return () => clearTimeout(timeout);
        } else {
            setIsExpanded(false);
        }
    }, [autoExpand]);

    // Determine the background color
    const firstBoxType = Object.values(order.drains)[0]?.box || 'Plain';
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
        'IB',
        'Garlock',
        'Plain',
    ]);

    const handleCardClick = (e) => {
        // Don't toggle expansion if clicking edit or delete buttons
        if (e.target.closest('.action-button')) {
            return;
        }
        setIsExpanded(!isExpanded);
    };

    const handleUpdateOrder = (updatedOrder) => {
        onUpdate(updatedOrder);
        setShowEditModal(false);
    };

    return (
        <>
            <div className={`w-[95%] mx-auto rounded-md shadow-md border transition-all duration-150 ${bgClass} will-change-transform origin-center cursor-pointer relative group`} onClick={handleCardClick}>
                {/* Action buttons */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        className="action-button p-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                        onClick={() => setShowEditModal(true)}
                    >
                        <PencilIcon className="w-4 h-4" />
                    </button>
                    <button 
                        className="action-button p-1 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
                        onClick={() => onDelete(order.orderNumber)}
                    >
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </div>

                <div className={`p-1 cardTilt-on-hover ${isExpanded ? 'rounded-t-md' : 'rounded-md'} ${!isExpanded && 'cardTilt-on-hover'}`}>
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

                    {/* Drain summaries in collapsed state */}
                    {!isExpanded && (
                        <div className="mt-2 space-y-1 px-2">
                            {Object.entries(order.drains).map(([drainId, drain]) => (
                                <p key={drainId} className="text-sm text-gray-600 text-center font-mono">
                                    {formatDrainSummary(drain)}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/* When the card is expanded, show the order details */}
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden max-h-0 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'opacity-0'}`}
                >
                    <OrderCardDetails order={order} />
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && (
                <OrderEditModal
                    order={order}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleUpdateOrder}
                />
            )}
        </>
    );
}

export default OrderCard;