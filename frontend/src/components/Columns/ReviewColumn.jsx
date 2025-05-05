import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'

function ReviewColumn({ orders }) {
    return (
      <Droppable droppableId="review">
        {(provided) => (
          <div
            className="columnReview"
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
  
  export default ReviewColumn;