
import './App.css';
import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import React , {Component} from 'react';
import Details from './componentes/Details';
import Cart from './componentes/Cart';
import Default from './componentes/Default';
import Navbar from './componentes/Navbar';
import Productlist from './componentes/Productlist';

class App extends Component{
  render(){
    return(

      <React.Fragment>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Productlist/>}/>


          <Route path='/details' element = {<Details/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route element={<Default/>}/>
        </Routes>

      </React.Fragment>
    );
  }
}

export default App;
