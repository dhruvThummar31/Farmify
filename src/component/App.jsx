
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import Cart  from './Cart';
import Final from './Final';
import Login from './Login';
import Register from './Regiter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/items/:type' element={<Items/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/final' element={<Final/>}></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register'element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
