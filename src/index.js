import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Formulario from './routes/Formulario';
import Listagem from './routes/Listagem.jsx'
import Home from './routes/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path:'/', element: <Home/>},
      {path:'/formulario', element: <Formulario/>},
      {path:'/listagem', element: <Listagem/>},
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
