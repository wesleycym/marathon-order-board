import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="logo" />
        <button type = "button" className = "add-order-button">Add New Order</button>
      </header>
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
    </>
  );
}

export default App;
