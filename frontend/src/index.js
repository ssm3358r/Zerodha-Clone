import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import { BrowserRouter ,Route,Routes,Link  } from 'react-router-dom';
import PricingPage from './landingPage/pricing/PricingPage';
import SignUp from './landingPage/signup/SignUp';
import Login from './landingPage/signup/Login';
import SupportPage from './landingPage/support/SupportPage';
import AboutPage from './landingPage/about/AboutPage';
import ProductPage from './landingPage/products/ProductPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
      <Footer/>
</BrowserRouter>
);


