import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Products from '../componets/products';
import ErrorComponent from '../error';
import App from '../App'
import Register from '../pages/register';
import Login from '../pages/login';
import ProductDetail from '../pages/productdetail';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, 
    errorElement: <ErrorComponent/>, 
    children: [
      { path: '/', element: <Products/> }, 
      { path: '/registro', element: <Register/> }, 
      { path: '/inicio-sesion', element: <Login/> }, 
      {
    path: '/product/:id', 
    element: <ProductDetail />,
  },
    ],
    
  },
]);
