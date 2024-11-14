import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Error from './error';
import Serie from './Serie';
import Movie from './Movie';

const router= createBrowserRouter ([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/Serie",
    element: <Serie/>,
  },
  {
    path:"/movie",
    element: <Movie/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
