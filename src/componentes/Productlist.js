import React , {Component} from 'react';
import Product from './Product';
import Title from '../Title';
import { Produtoconsumer } from '../context';

export default class Productlist extends Component {

    render(){
        return(

            <React.Fragment>
                <div className='py-5'>

                    <div className='container'>
                        <Title name="Nossos " title="Produtos "/>

                        <div className='row'>

                            <Produtoconsumer>
                                {value =>{
                                    return value.products.map(product=>{
                                        return<Product key={product.id}product={product}/>;
                                    });
                                }}
                            </Produtoconsumer>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}