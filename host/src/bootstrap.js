import React from 'react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import MiniDrawer from './menu/Menu';
//  const Dashboard = React.lazy(() => import('dashboardApp/App'));
 const Myname = React.lazy(() => import('dashboardApp/Myname'));


function Host() {
  return (
    <div className="App">

      <MiniDrawer />
  {/* <Myname /> */}
      
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Host />);
