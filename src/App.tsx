import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cart from './Cart';
import store from './store/store';
import Products from './ Products';
import Wish from './Wish';
import Navbar from './Navbar';
import Address from './Address';

function App() {
  return (
   <Provider store={store}>
  
    <BrowserRouter>
     <Navbar/>
     <Routes>
 
      <Route path='/' element={<Products/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='address' element={<Address/>}/>
      <Route path='wish' element={<Wish/>}/> 
  
     </Routes>
     </BrowserRouter>

   </Provider>
  );
}

export default App;
