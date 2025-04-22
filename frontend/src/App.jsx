import { useState } from 'react'
import './App.css'
import './styles/addOrder.css'
import './styles/columnStyling.css'

import OrderForm from './components/OrderForm.jsx'


function App() {

  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleAddOrderClick = () => setShowOrderForm(true);
  const handleCloseOrderForm = () => setShowOrderForm(false);

  return (
    <>
      {/* Header -> Logo  */}
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="flex mx-auto max-w-full h-auto select-none" /> {/* Added tailwind styling */}
      </header>

        {/* Add order button */}
        {/* <button className="add-order-button " onClick = {handleAddOrderClick}>
          <span className="add-order-text">Add New Order</span>
        </button> */}

        {/* Proof of Concept Order Entry Form */}
        {showOrderForm && <OrderForm onClose={handleCloseOrderForm} />}

        {/* Board -> All columns here  */}
        <div className="board font-bold">
          <div className="columnBacklog">
            <h2>Backlog</h2>
            <button className="add-order-button" onClick={handleAddOrderClick}>
              <span className="add-order-text">Add New Order</span>
            </button>
          </div>
          <div className="columnInProgress">
            <h2>In Progress</h2>
          </div>
          <div className="columnReview">
            <h2>Review</h2>
          </div>
          <div className="columnCompleted">
            <h2>Completed</h2>
          </div>
        </div>


    </>
  );
}

export default App;
