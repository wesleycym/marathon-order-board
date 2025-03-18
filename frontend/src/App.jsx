import { useState } from 'react'
import './App.css'
import './styles/addOrder.css'
import './styles/columnStyling.css'

/*
        <button className="add-order-button">
          <span className="add-order-text">Add New Order</span>
        </button>
*/

function App() {

  return (
    <>
      {/* Header -> Logo  */}
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="flex mx-auto max-w-full h-auto select-none" /> {/* Added tailwind styling */}
      </header>

        {/* Board -> All columns here  */}
        <div className="board font-bold">
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
