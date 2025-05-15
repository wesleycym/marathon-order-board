import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import '../../styles/addOrder.css'
import OrderCard from '../OrderCardComponents/OrderCard.jsx'
import { PlusIcon } from '@heroicons/react/24/solid'

function BacklogColumn({ orders, onAddOrderClick }) {
    return (
      <Droppable droppableId="backlog">
        {(provided) => (
          <div
            className="columnBacklog"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >

            <div className="relative flex items-center justify-center border-b-2 border-black">
              <button
                onClick={onAddOrderClick}
                className="absolute left-2 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
              <h2 className="text-lg font-bold select-none">Backlog</h2>
            </div>
  
            {orders.map((order, index) => (
              <Draggable key={order.orderNumber} draggableId={order.orderNumber} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable-order"
                  >
                    <OrderCard order = {order}/> {/* Order card component */}
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
  
  export default BacklogColumn;