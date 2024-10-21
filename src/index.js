import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import User from './component/User';
import Userregister from './component/Userregister';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/user",
    element:<User/>
  },
  {
    path:"/user-register",
    element:<Userregister/>
  }
  
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
     <App/>
    </RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
