import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import { OrderCard } from '../OrderCardComponents/OrderCard.jsx'

function CompletedColumn({ orders }) {
    return (
      <Droppable droppableId="completed">
        {(provided) => (
          <div
            className="columnCompleted"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Review</h2>
  
            {orders.map((order, index) => (
              <Draggable key={order.orderNumber} draggableId={order.orderNumber} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable-order"
                  >
                    <OrderCard /> {/* Order card component */}
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
  
  export default CompletedColumn;