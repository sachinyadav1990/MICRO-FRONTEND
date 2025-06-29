import React from 'react';
import { createRoot } from 'react-dom/client';



function Host() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Host />);
