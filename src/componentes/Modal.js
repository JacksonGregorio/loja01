import React, { Component } from "react";
import styled from "styled-components";
import { Produtoconsumer } from "../context";
import { Link } from 'react-router-dom';
import styledComponents from "styled-components";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Button } from "bootstrap";


export default class Modal extends Component {
    render(){
        return(

            <Produtoconsumer>
                {(value)=>{

                const {modalopen,closeModal} = value;
                const {img,title,price} = value.modalproduto;

                if(!modalopen){

                    return null;

                }else{
                    return(
                        <ModalContainer>
                            <div className="container">

                                <div className="row">

                                    <div id="Modal" className="col-8 mx-auto col-md-6 lg-4 texte-center text-capitalizer">
                                        <h5>produto adicionado ao carrinho</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Preço : R$ {price}</h5>
                                        <div className="d-flex justify-content-between">
                                        <Link to={"/"}>
                                            <button onClick={()=> closeModal()}>
                                                loja
                                            </button>
                                        </Link>

                                        <Link to={"/cart"}>

                                            <button onClick={()=> closeModal()}>
                                            <span className='mr-2'>
                                             <i className='fas fa-cart-plus'/>Carrinho
                                            </span>

                                            </button>

                                        </Link>
                                        </div>


                                    </div>

                                </div>
                                
                            </div>
                        </ModalContainer>
                    );
                }


                    
                }}
            </Produtoconsumer>

        );
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(255, 255, 255, 0.404);
#Modal{

    background-color:rgba(0, 0, 0, 1);

}
`