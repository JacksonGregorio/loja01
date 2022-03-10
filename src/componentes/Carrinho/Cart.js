import React , {Component} from 'react';
import Title from '../Title';
import cartColunas from './cartColunas';
import VazioCart from './VazioCart';

export default class Cart extends Component {
    render(){
        return(

            <section>
                <Title name="seu" title="Carrinho"/>

                <cartColunas/>
                <VazioCart/>

            </section>
        )
    }
}

