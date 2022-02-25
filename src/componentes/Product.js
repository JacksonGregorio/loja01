import React , {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Produtoconsumer } from '../context';
import { prototype } from 'prop-types';




export default class Product extends Component {
    render(){
        const{id, title, img, price, incart,}=this.props.product;
        return(
            <ProductWrapper className='col-sm mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>

                    <div className='img-container p-5' onClick={()=>console.log("esta iamgem é do produto")}>
                        <Link to={"/Details"}>
                            <img src={img} alt='product' className='card-img-top'/>
                        </Link>
                        <button className='cart-btn' id='btn-cart' disabled={incart? true:false} onClick={()=>{console.log("add para carrinho")}}>
                        {incart ?(
                            <p className='text-capitalize mb-8' disabled>
                                {""}
                                já existe
                            </p>
                        ):(
                            <i className='fas fa-cart-plus' />
                        )}
                        </button>

                    </div>

                    <div className='card-footer d-flex'>

                        <p className='align-self-center mb-0'>
                            {title +"  "}
                        </p>                    
                        
                        <h5 className='texte-blue font-italic mb-0'>
                            <span className='mr-1'>{" "}R$</span>
                            {"  "+price}
                        </h5>

                    </div>

                </div>
            </ProductWrapper>
        )
    }
}

Product.protoType={
    product:propTypes.shape({
        id:propTypes.number,

        img:propTypes.string,
        title:propTypes.string,
        price:propTypes.number,
        incart:propTypes.bool,
        
    }).isRequired
};


const ProductWrapper = styled.div`
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    color:rgb(76, 5, 161);
    width:40px;
    height:35px;
    background-color:black;
    border-color: blueviolet;

}

i{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    color:rgb(76, 5, 161);
        
}

h5{
    font-size: 25px;
}

span{
    font-size: 25px;
}
`