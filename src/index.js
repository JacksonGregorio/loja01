import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import{ProdutoProvider} from './context'

ReactDOM.render(

  <ProdutoProvider>

   <Router> 
    <App />
   </Router>

  </ProdutoProvider>,



  document.getElementById('root'));

reportWebVitals();
