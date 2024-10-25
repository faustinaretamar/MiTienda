import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/navbar';
import Product from './componets/product';
import Products from './componets/products';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
      <Navbar/>
      <Outlet />
    </>

  )
}

export default App
