import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Pages/About'
import Contactus from './Pages/Contactus';
import Product from './Pages/Product';
import Header from './Header';
import Home from './Content';
import Footer from './Footer';


function App2() {

  return (

    <Router>

    <Header/>
        
    <Routes>
        
       <Route path='/' element={<Home/>} />
      
       <Route path='/About' element={<About/>} />
      
       <Route path='/Product' element={<Product/>} />

       <Route path='/Contactus' element={<Contactus/>} />

    </Routes>

    <Footer/>

    </Router>
    
  );
  
}
  

export default App2;