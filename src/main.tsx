import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//pages
import Home from './routes/Home.tsx';
import Repos from './routes/Repos.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/github_finder_react_typescrit_vite',
        element: <Home/>,
      },
      {
        path: '/repos/:user',
        element: <Repos/>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
