import { useState } from 'react'
import './App.css'
import './styles/addOrder.css'
import './styles/columnStyling.css'

function App() {

  return (
    <>
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="logo" />
        <button className="add-order-button">
          <span className="add-order-text">Add New Order</span>
        </button>
      </header>

      <div className = "font-bold">
        <div className="board">
          <div className="columnBacklog">
            <h2>Backlog</h2>
          </div>
          <div className="columnInProgress">
            <h2>In Progress</h2>
          </div>
          <div className="columnCompleted">
            <h2>Completed</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
