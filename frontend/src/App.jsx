import { useState } from 'react'
import './App.css'

function App() {
  return (
    <> {/* Ensure the parent container stretches */}
      <header>
        <img src="/logo.png" alt="Marathon Logo" className="logo" />
      </header>
      <div className="board">
        <div className="column backlog">
          <h2>Backlog</h2>
        </div>
        <div className="column in-progress">
          <h2>In Progress</h2>
        </div>
        <div className="column completed">
          <h2>Completed</h2>
        </div>
      </div>
    </>
  );
}

export default App;
