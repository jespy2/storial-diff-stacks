import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routesConfig } from './App.routes';

function App() {
  const router = createBrowserRouter(routesConfig);
  return (
      <div className="App">
        <section>
          <RouterProvider router={router} />
        </section>
      </div>
  );
}

export default App;
