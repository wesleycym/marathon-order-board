import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import OrderCard from '../OrderCardComponents/OrderCard.jsx'

function ReviewColumn({ orders }) {
    return (
      <Droppable droppableId="review">
        {(provided) => (
          <div className="columnReview flex flex-col h-full">
            
            <h2>Review</h2>
  
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex-1 flex flex-col justify-start min-h-[10rem]"
            >
              {orders.map((order, index) => (
                <Draggable key={order.orderNumber} draggableId={order.orderNumber} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="draggable-order py-2"
                    >
                      <OrderCard order = {order}/> {/* Order card component */}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    );
  }
  
  export default ReviewColumn;