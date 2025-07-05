import React from "react";
import { createRoot } from 'react-dom/client';
import Myname from './Myname';

function App () {
  return <div className="App">
      Dashboard
        <Myname />
    </div>
};

export default App




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);