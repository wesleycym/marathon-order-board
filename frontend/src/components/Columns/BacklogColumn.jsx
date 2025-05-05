import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import '../../styles/addOrder.css'

function BacklogColumn({ orders, onAddOrderClick }) {
    return (
      <Droppable droppableId="backlog">
        {(provided) => (
          <div
            className="columnBacklog"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Backlog</h2>
  
            {orders.map((order, index) => (
              <Draggable key={order.orderNumber} draggableId={order.orderNumber} index={index}>
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
  
            <button className="add-order-button" onClick={onAddOrderClick}>
              <span className="add-order-text">Add New Order</span>
            </button>
          </div>
        )}
      </Droppable>
    );
  }
  
  export default BacklogColumn;