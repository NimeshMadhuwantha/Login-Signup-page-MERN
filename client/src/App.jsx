import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';


function App() {
  

  return (
  <BrowserRouter>
   <Routes>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
   </Routes>
  
  </BrowserRouter>
  )
}

export default App;
