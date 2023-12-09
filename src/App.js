import React from 'react';
import { Routes, Route } from "react-router-dom"

import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';
import Products from './Component/Products/Products';
import Comments from './Component/Comments/Comments';
import Users from './Component/Users/Users';
import Orders from './Component/Orders/Orders';
import Offs from './Component/Offs/Offs';


import './App.css'

export default function App() {
  return ( <>
    <Sidebar>GlamourHoney</Sidebar>

    <div className='main'>
      <Header />

        <routes>
          <Route path="/product" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offs" element={<Offs />} />
        </routes>

    </div>
    </>)
}
