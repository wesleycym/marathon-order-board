import { useState } from 'react'
import './App.css'
import './styles/columnStyling.css'
import { createHandleDragEnd } from './lib/dragUtils.js' // Drag and drop helper

// All column components
import BacklogColumn from './components/Columns/BacklogColumn.jsx'
import InProgressColumn from './components/Columns/InProgressColumn.jsx'
import ReviewColumn from './components/Columns/ReviewColumn.jsx'
import CompletedColumn from './components/Columns/CompletedColumn.jsx'

import {
  DragDropContext,
  Droppable,
  Draggable
} from '@hello-pangea/dnd'; // Package used: https://github.com/hello-pangea/dnd

import OrderForm from './components/OrderFormComponents/OrderForm.jsx' // Component for creating new orders / adding drains 

import { ToastContainer, toast } from 'react-toastify'; // Import Toastify / wrapping App.jsx in ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showOrderForm, setShowOrderForm] = useState(false); // State to control the visibility of the order form
  const handleAddOrderClick = () => setShowOrderForm(true); // Function to open the order form
  const handleCloseOrderForm = () => setShowOrderForm(false); // Function to close the order form

  // Example order with multiple drains
  const exampleOrder = {
    orderNumber: "12345",
    orderDate: "2024-03-20",
    drains: {
      "drain-1": {
        total: "3",
        box: "Marathon",
        size: "3\"",
        coatings: "TPO",
        seal: "ProSeal",
        dome: "Aluminum Dome",
        ring: "Aluminum Ring"
      },
      "drain-2": {
        total: "2",
        box: "TruFast",
        size: "4\"",
        coatings: "PVC",
        seal: "MaxxFlo",
        dome: "Black Plastic Dome"
      },
      "drain-3": {
        total: "1",
        box: "Aluminator",
        size: "6\"",
        coatings: "Asphalt",
        ring: "Black Plastic Ring"
      }
    }
  };

  const [columns, setColumns] = useState({
    backlog: [exampleOrder], // Add example order to backlog
    inProgress: [],
    review: [],
    completed: []
  });

  const handleDeleteOrder = (orderNumber) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setColumns(prev => {
        const newColumns = {};
        // Remove the order from whichever column it's in
        Object.keys(prev).forEach(columnId => {
          newColumns[columnId] = prev[columnId].filter(order => order.orderNumber !== orderNumber);
        });
        return newColumns;
      });
      toast.success('Order deleted successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  const handleUpdateOrder = (updatedOrder) => {
    let orderFound = false;
    
    setColumns(prev => {
      const newColumns = {};
      // Find and update the order in whichever column it's in
      Object.keys(prev).forEach(columnId => {
        newColumns[columnId] = prev[columnId].map(order => {
          if (order.orderNumber === updatedOrder.orderNumber) {
            orderFound = true;
            return updatedOrder;
          }
          return order;
        });
      });
      return newColumns;
    });

    // Show success toast only if the order was actually updated
    if (orderFound) {
      toast.success('Order updated successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <>
      {/* Single ToastContainer with configuration */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
      />

      {/* Header -> Logo */}
      <header>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Marathon Logo"
          className="flex mx-auto max-w-full h-auto select-none wiggle-on-hover"
        />
      </header>

      {/* Order Form */}
      {showOrderForm && (
        <OrderForm
          onClose={handleCloseOrderForm}
          onSubmit={(newOrder) => {
            setColumns((prev) => ({
              ...prev,
              backlog: [...prev.backlog, newOrder]
            }));
            handleCloseOrderForm();
          }}
        />
      )}
  
      {/* Main Drag and Drop Board */}
      <DragDropContext onDragEnd={createHandleDragEnd(columns, setColumns)}>
        <div className="board font-bold">
          <BacklogColumn 
            orders={columns.backlog} 
            onAddOrderClick={handleAddOrderClick}
            onDeleteOrder={handleDeleteOrder}
            onUpdateOrder={handleUpdateOrder}
          />
          <InProgressColumn 
            orders={columns.inProgress}
            onDeleteOrder={handleDeleteOrder}
            onUpdateOrder={handleUpdateOrder}
          />
          <ReviewColumn 
            orders={columns.review}
            onDeleteOrder={handleDeleteOrder}
            onUpdateOrder={handleUpdateOrder}
          />
          <CompletedColumn 
            orders={columns.completed}
            onDeleteOrder={handleDeleteOrder}
            onUpdateOrder={handleUpdateOrder}
          />
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
