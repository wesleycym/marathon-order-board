import { Droppable, Draggable } from '@hello-pangea/dnd';
import './styles/columnStyling.css'

function InProgressColumn({ orders }) {
    return (
      <Droppable droppableId="inProgress">
        {(provided) => (
          <div
            className="columnInProgress"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>In Progress</h2>
  
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

          </div>
        )}
      </Droppable>
    );
  }
  
  export default InProgressColumn;