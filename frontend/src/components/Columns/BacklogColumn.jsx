import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import OrderCard from '../OrderCardComponents/OrderCard.jsx'
import { PlusIcon } from '@heroicons/react/24/solid'

// Add sorting features for this column
// - Drain AMT
// - Ship date

function BacklogColumn({ orders, onAddOrderClick, onDeleteOrder, onUpdateOrder }) {
    return (
      <Droppable droppableId="backlog">
        {(provided) => (
          <div
            className="columnBacklog flex flex-col h-[75vh]"
          >
            { /* Header row */ }
            <div className="relative flex items-center justify-center border-b-2 border-black">
              <button
                onClick={onAddOrderClick}
                className="absolute left-2 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
              >
                <PlusIcon className="w-4 h-4"/>
              </button>
              <h2 className="text-lg font-bold select-none">Backlog</h2>
            </div>
  
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
  
  export default BacklogColumn;