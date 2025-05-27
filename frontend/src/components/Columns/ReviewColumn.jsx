import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import OrderCard from '../OrderCardComponents/OrderCard.jsx'

// Maybe add a flag for who is checking this order

function ReviewColumn({ orders, onDeleteOrder, onUpdateOrder }) {
    return (
      <Droppable droppableId="review">
        {(provided) => (
          <div className="columnReview flex flex-col h-[75vh]">
            
            <h2>Review</h2>
  
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex-1 overflow-y-auto flex flex-col justify-start"
              style={{ scrollbarGutter: 'stable' }}
            >
              {orders.map((order, index) => (
                <Draggable key={order.orderNumber} draggableId={order.orderNumber} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="py-2 pl-2"
                    >
                      <div className='w-[100%] mx-auto'>
                        <OrderCard 
                          order={order}
                          onDelete={onDeleteOrder}
                          onUpdate={onUpdateOrder}
                        />
                      </div>
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