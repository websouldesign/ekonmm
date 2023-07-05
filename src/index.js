import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/owl.carousel.min.css';
import '../src/assets/css/tempusdominus-bootstrap-4.min.css'
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/normalize.css';
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';
import { BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />    
 </BrowserRouter>
);

