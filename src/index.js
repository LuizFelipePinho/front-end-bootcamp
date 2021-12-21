import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Shared/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Carrinho from './Pages/Carrinho/Carrinho';
import AddProduto from './Pages/AddProduto/AddProduto';
import Finalizar from './Pages/Finalizar/Finalizar';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer'
import Home2 from '../src/Pages/Home/Home2.0'




ReactDOM.render(
  <React.StrictMode>    
    <Header />
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Home />}  /> 
        <Route path="/login" element={<Login />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/Finalizar" element={<Finalizar />} />
        <Route path="/Home2" element={<Home2 />} />
        
    </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
