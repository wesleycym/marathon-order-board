import { useState } from 'react'
import './App.css'
import './styles/addOrder.css'
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


// Add each imported column in the html 
// Test with dummy data
// Then wire up the add to order button -> doesn't need to contain info yet

function App() {
  const [showOrderForm, setShowOrderForm] = useState(false); // State to control the visibility of the order form
  const handleAddOrderClick = () => setShowOrderForm(true); // Function to open the order form
  const handleCloseOrderForm = () => setShowOrderForm(false); // Function to close the order form

  const [columns, setColumns] = useState({
    backlog: [    
      { orderNumber: 'TEST-1001' },
      { orderNumber: 'TEST-1002' },
    ], // Array to store backlog items
    inProgress: [], // Array to store in-progress items
    review: [], // Array to store review items
    completed: [] // Array to store completed items
  });

  return (
    <>
      {/* Header -> Logo */}
      <header>
        <img
          src="/logo.png"
          alt="Marathon Logo"
          className="flex mx-auto max-w-full h-auto select-none wiggle-on-hover"
        />
      </header>
  
      {/* Proof of Concept Order Entry Form */}
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
          <BacklogColumn orders={columns.backlog} onAddOrderClick={handleAddOrderClick} />
          <InProgressColumn orders={columns.inProgress} />
          <ReviewColumn orders={columns.review} />
          <CompletedColumn orders={columns.completed} />
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
