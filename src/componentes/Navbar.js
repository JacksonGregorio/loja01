import React , {Component} from 'react';
import logo3 from "../Bootstrap_logo.svg.png"
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class Navbar extends Component {
    render(){
        return(
            <><nav className='navbar navbar-expand-sm bg-dark navbar-dark px-sm-5 d-flex justify-content-between'>
              <Link to={"/"}>
                <img src={logo3} alt='loja' className='navbar-brand '/>
              </Link>
                <ul className='navbar-nav ali'> 
                    <li className='nav-item ml-5'>
                        <Link to={'/'} className='nav-link'>produtos</Link>
                    </li>
                </ul>
                
                <Link to={"/cart"} className="ml-auto ">

                    <button>
                        
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus'/>Meu Carrinho
                        </span>

                    </button>
                
                </Link>
                
            </nav></>

        )
    }
}

