import React , {Component} from 'react';
import {lojaProdutos,detalhesproduto } from "./data";

const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
    state={
        products:lojaProdutos,
        detalhesproduto:detalhesproduto
    };

    handleDetalhe=()=>{
        console.log("ola da pagina detalhes");
    };

    addTocarrinho=()=>{
        console.log("ola da pagina carrinhos");
    };



    render(){
        return(
            <ProdutoContext.Provider value={{
                ...this.state,
                handleDetalhe:this.handleDetalhe,
                addTocarrinho:this.addTocarrinho
            }}>
                {this.props.children}


            </ProdutoContext.Provider>
        )
    }
}

const Produtoconsumer = ProdutoContext.Consumer;

export {ProdutoProvider,Produtoconsumer};



