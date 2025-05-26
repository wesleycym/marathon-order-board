import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import OrderCard from '../OrderCardComponents/OrderCard.jsx'

// Auto remove orders from this column at the end of the day

function CompletedColumn({ orders }) {
    return (
      <Droppable droppableId="completed">
        {(provided) => (
          <div className="columnCompleted flex flex-col h-[75vh]">
            
            <h2>Completed</h2>
  
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
                      <div className='w-[100%] mx-auto '>
                        <OrderCard order = {order}/> {/* Order card component */}
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
  
  export default CompletedColumn;