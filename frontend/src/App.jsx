import { useState } from 'react'
import './App.css'
import './styles/addOrder.css'
import './styles/columnStyling.css'
import { createHandleDragEnd } from './lib/dragUtils.js' // Drag and drop helper

import {
  DragDropContext,
  Droppable,
  Draggable
} from '@hello-pangea/dnd'; // Package used: https://github.com/hello-pangea/dnd

import OrderForm from './components/OrderFormComponents/OrderForm.jsx'


function App() {
  const [showOrderForm, setShowOrderForm] = useState(false); // State to control the visibility of the order form
  const handleAddOrderClick = () => setShowOrderForm(true); // Function to open the order form
  const handleCloseOrderForm = () => setShowOrderForm(false); // Function to close the order form

  const [columns, setColumns] = useState({
    backlog: [], // Array to store backlog items
    inProgress: [], // Array to store in-progress items
    review: [], // Array to store review items
    completed: [] // Array to store completed items
  });

  return (
    <>
      {/* Header -> Logo  */}
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="flex mx-auto max-w-full h-auto select-none 
        wiggle-on-hover" />
      </header>

        {/* Proof of Concept Order Entry Form */}
        {showOrderForm && <OrderForm onClose={handleCloseOrderForm} />}

        {/* Board -> All columns here  */}
        <div className="board font-bold">
          <div className="columnBacklog">

            <h2>Backlog</h2>

            <button className="add-order-button" onClick={handleAddOrderClick}>
              <span className="add-order-text">Add New Order</span>
            </button>

          </div>

          <div className="columnInProgress">
            <h2>In Progress</h2>
          </div>

          <div className="columnReview">
            <h2>Review</h2>
          </div>

          <div className="columnCompleted">
            <h2>Completed</h2>
          </div>

        </div>


    </>
  );
}

export default App;
