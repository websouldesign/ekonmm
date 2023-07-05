import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './component/main/Home';
import About from './component/main/About';
import Blog from './component/main/Blog';
import Contact from './component/main/Contact';
import Service from './component/main/Service';
import Career from './component/main/Career';
import Product from './component/main/Product';
import BlogDetail from './component/main/BlogDetail';

export default function RoutesFolder() {
  return (
    <div>
        <Routes>
            
                <Route exact path='/' element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/career" element={<Career/>} />
                <Route path="/blog-detail" element={<BlogDetail/>} />
               
        </Routes>
    </div>
  )
}
