import React, { useState } from 'react';
import OrderFormDrains from '../OrderFormComponents/OrderFormDrains';
import OrderNumber from '../Drain Options/OrderNumber';
import OrderDate from '../Drain Options/OrderDate';
import OrderSummary from '../OrderFormComponents/OrderSummary';
import { toast } from 'react-toastify';

function OrderEditModal({ order, onClose, onSave }) {
    const [orderNumber, setOrderNumber] = useState(order.orderNumber);
    const [orderDate, setOrderDate] = useState(order.orderDate);
    const [drainEntries, setDrainEntries] = useState(order.drains);
    const [currentDrain, setCurrentDrain] = useState({
        box: '',
        size: '',
        total: '',
        dome: '',
        ring: '',
        coatings: '',
        seal: ''
    });

    const [errors, setErrors] = useState({
        orderNumber: false,
        orderDate: false,
    });

    const handleRemoveDrain = (drainId) => {
        const updatedDrains = { ...drainEntries };
        delete updatedDrains[drainId];
        setDrainEntries(updatedDrains);
    };

    const handleSave = (e) => {
        e.preventDefault();

        const newErrors = {
            orderNumber: !orderNumber.trim(),
            orderDate: !orderDate.trim(),
        };

        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some(val => val === true);
        
        if (hasErrors) {
            toast.error('Order number and shipping date are required.', {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
            return;
        }

        const updatedOrder = {
            orderNumber,
            orderDate,
            drains: drainEntries
        };

        onSave(updatedOrder);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="order-entry-form max-h-[90vh] overflow-y-auto">
                <h1 className="flex justify-center text-[1.1rem] font-semibold text-stone-700">Edit Order</h1>

                <form onSubmit={handleSave}>
                    <div className="flex items-center justify-center flex-wrap gap-4 p-2">
                        <div className="flex flex-col items-center">
                            <h4 className="text-stone-700 font-medium">Order Number</h4>
                            <OrderNumber 
                                orderNumber={orderNumber} 
                                setOrderNumber={setOrderNumber} 
                                inputClass={errors.orderNumber ? 'border-red-500 ring-2 ring-red-400' : ''} 
                            />
                        </div>

                        <p className="text-stone-700">|</p>

                        <div className="flex flex-col items-center">
                            <h4 className="text-stone-700 font-medium">Ship Date</h4>
                            <OrderDate 
                                orderDate={orderDate} 
                                setOrderDate={setOrderDate} 
                                inputClass={errors.orderDate ? 'border-red-500 ring-2 ring-red-400' : ''} 
                            />
                        </div>
                    </div>

                    <div className="flex">
                        <OrderFormDrains
                            drainId='Current-Drain'
                            currentDrain={currentDrain}
                            setCurrentDrain={setCurrentDrain}
                            drainEntries={drainEntries}
                            setDrainEntries={setDrainEntries}
                            createNewDrain={() => ({
                                box: '',
                                size: '',
                                total: '',
                                dome: '',
                                ring: '',
                                coatings: '',
                                seal: ''
                            })}
                        />

                        <div className="order-summary">
                            <div className="order-summary-wrapper">
                                <OrderSummary drainEntries={drainEntries} onRemoveDrain={handleRemoveDrain} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                        <button type="submit" className="submit-order-button">
                            Save Changes
                        </button>
                        <button type="button" className="close-order-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderEditModal; 