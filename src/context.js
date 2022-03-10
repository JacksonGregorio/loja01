import React , {Component} from 'react';
import {lojaProdutos,detalhesproduto } from "./data";

const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
    state={
        products:[],
        detalhesproduto:detalhesproduto,
        cart:[],
        modalopen:false,
        modalproduto:detalhesproduto,
        cartSubTotal:0,
        cartImposto:0,
        cartTotal:0,


    };

    componentDidMount(){

        this.setProducts();

    };

    pegarItem = id =>{
        const product = this.state.products.find(item=>item.id===id);
        return product;
    };

    handleDetalhe=id=>{
        const product = this.pegarItem(id);
        this.setState(()=>{
            return{detalhesproduto:product}
        })
    }
    addTocarrinho=id=>{

        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.pegarItem(id));
        const product = tempProducts[index];
        product.incart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{product:tempProducts, cart:[...this.state.cart]};
        },
        ()=>{console.log(this.state);}
        );
       
    };
    setProducts=()=>{
        let tempProducts = [];
        lojaProdutos.forEach(item=>{
            const singleItem={...item};
            tempProducts = [...tempProducts,singleItem]

        });
        this.setState(()=>{
            return{products:tempProducts};
        });

    };

    openModal = id =>{
        const product = this.pegarItem(id)
        this.setState(()=>{
            return{modalproduto:product,modalopen:true}
        })
    };

    closeModal=()=>{
        this.setState(()=>{
            return {modalopen:false}
        })
    };

    incremento = (id) =>{
        console.log("adicionar produtos")
    }

    decremento = (id) =>{
        console.log("tirar produtos")
    }

    removerItem = (id) =>{
        console.log("excluir produtos")
    }

    clearCarrinho = (id) =>{
        console.log("limpar produtos")
    }





    render(){
        return(
            <ProdutoContext.Provider value={{
                ...this.state,
                handleDetalhe:this.handleDetalhe,
                addTocarrinho:this.addTocarrinho,
                openModal:this.openModal,
                closeModal:this.closeModal,
                incremento:this.incremento,
                decremento:this.decremento,
                removerItem:this.removerItem,
                clearCarrinh:this.clearCarrinho



            }}>
                {this.props.children}


            </ProdutoContext.Provider>
        )
    }
}

const Produtoconsumer = ProdutoContext.Consumer;

export {ProdutoProvider,Produtoconsumer};



