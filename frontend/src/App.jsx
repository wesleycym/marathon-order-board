import { useState } from 'react'
import './App.css'

import { FloatingDock } from './components/ui/floating-dock'; // Import floating dock component

function App() {

  const items = 
  [
    {
      title: "Add New Order",
      icon: "➕",
      href: "/add-order",
    },
  ];

  return (
    <>
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="logo" />
        <button className="add-order-button">
          <span className="add-order-text">Add New Order</span>
        </button>
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

      <FloatingDock items={items} />

    </>
  );
}

export default App;
