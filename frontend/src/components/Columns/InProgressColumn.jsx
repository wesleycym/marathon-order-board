import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import OrderCard from '../OrderCardComponents/OrderCard.jsx'
import OrderCardDetails from '../OrderCardComponents/OrderCardDetails.jsx'

// TO DO:
// - Have the column auto expand when a new order is added

function InProgressColumn({ orders, onDeleteOrder, onUpdateOrder }) {
    return (
      <Droppable droppableId="inProgress">
        {(provided) => (
          <div className="columnInProgress flex flex-col h-[75vh]">
            
            <h2>In Progress</h2>
  
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

                        <OrderCard 
                          order={order} 
                          autoExpand={true}
                          onDelete={onDeleteOrder}
                          onUpdate={onUpdateOrder}
                        /> {/* Order card component */}
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
  
  export default InProgressColumn;