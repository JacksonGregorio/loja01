import React , {Component} from 'react';
import { Produtoconsumer } from '../context';
import { ButtonContainer } from "./Button"
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render(){
        return(
            <Produtoconsumer>
                {value=>{
                    const{id,img,info,price,title,incart,company}=value.detalhesproduto;
                    return(
                        <div className='container py-5'>

                            <div className='row'>

                                <div className='col-10 mx-auto text-center text-slented my-5'>

                                    <h1>{title}</h1>

                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-10 mx-auto col-md-5 my-5 d-flex'>

                                    <img src={img} className="img-fluid" alt='product'></img>

                                </div>
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <h2>model:{title}</h2>
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                    fabricado por:<span className='text-uppercase'>{company}</span>   
                                </h4>

                                <h4 className='text-danger text-uppercase'>
                                    <strong>Preço : <span>R$</span>{price}</strong>
                                </h4>
                                <p className='text-capitalize font-weight-bold mt-3 mb-8'>
                                    Informações do produto : {info}
                                </p>

                                <div className='d-flex justify-content-between'>
                                    <Link to={"/"}>
                                    <button>
                                        volta
                                    </button>
                                    </Link>

                                    <button 
                                    disabled={incart?true:false} 
                                    onClick={()=>{value. addTocarrinho(id);value.openModal(id);}}
                                    
                                    >
                                        {incart?"No Carrinho":"Comprar"}
                                    </button>
                                </div>
                                </div>
                            </div>

                        </div>
                    );
                }}
            </Produtoconsumer>
        )
    }
}

