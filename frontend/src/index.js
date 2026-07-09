import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePg from './landing_page/home/HomePg';
import Signup from './landing_page/signup/Signup';
import AboutPg from './landing_page/about/AboutPg';
import ProductPg from './landing_page/products/ProductPg';
import PricingPg from './landing_page/pricing/PricingPg';
import SupportPg from './landing_page/support/SupportPg';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePg/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<AboutPg/>}></Route>
    <Route path="/products" element={<ProductPg/>}></Route>
    <Route path="/pricing" element={<PricingPg/>}></Route>
    <Route path="/support" element={<SupportPg/>}></Route>
    <Route path="/*" element={<NotFound/>}></Route>
  
  </Routes>
   <Footer/>
 </BrowserRouter>
);


