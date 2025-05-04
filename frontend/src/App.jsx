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
  
      {/* Board */}
      <DragDropContext onDragEnd={createHandleDragEnd(columns, setColumns)}>
        <div className="board font-bold">
          {/* Backlog Column */}
          <Droppable droppableId="backlog">
            {(provided) => (
              <div
                className="columnBacklog"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>Backlog</h2>
  
                {columns.backlog.map((order, index) => (
                  <Draggable
                    key={order.orderNumber}
                    draggableId={order.orderNumber}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-order"
                      >
                        {order.orderNumber}
                      </div>
                    )}
                  </Draggable>
                ))}
  
                {provided.placeholder}
  
                <button className="add-order-button" onClick={handleAddOrderClick}>
                  <span className="add-order-text">Add New Order</span>
                </button>
              </div>
            )}
          </Droppable>
  
          {/* In Progress Column */}
          <Droppable droppableId="inProgress">
            {(provided) => (
              <div
                className="columnInProgress"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>In Progress</h2>
                {columns.inProgress.map((order, index) => (
                  <Draggable
                    key={order.orderNumber}
                    draggableId={`${order.orderNumber}-progress`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-order"
                      >
                        {order.orderNumber}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
  
          {/* Review Column */}
          <Droppable droppableId="review">
            {(provided) => (
              <div
                className="columnReview"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>Review</h2>
                {columns.review.map((order, index) => (
                  <Draggable
                    key={order.orderNumber}
                    draggableId={`${order.orderNumber}-review`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-order"
                      >
                        {order.orderNumber}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
  
          {/* Completed Column */}
          <Droppable droppableId="completed">
            {(provided) => (
              <div
                className="columnCompleted"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>Completed</h2>
                {columns.completed.map((order, index) => (
                  <Draggable
                    key={order.orderNumber}
                    draggableId={`${order.orderNumber}-complete`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-order"
                      >
                        {order.orderNumber}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
