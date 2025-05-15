import { Droppable, Draggable } from '@hello-pangea/dnd';
import '../../styles/columnStyling.css'
import '../../styles/addOrder.css'

import OrderCard from '../OrderCardComponents/OrderCard.jsx'

function BacklogColumn({ orders, onAddOrderClick }) {
    return (
      <Droppable droppableId="backlog">
        {(provided) => (
          <div
            className="columnBacklog"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>
              Backlog
              <button className="add-order-button absolute left-6" onClick={onAddOrderClick}></button>
            </h2>
  
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