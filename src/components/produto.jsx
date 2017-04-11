//classes com prod<Name> significam que fazem parte de prodUTO
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addInCarrinho } from '../actions/add-carrinho.action';
import { closeOrdenar } from '../actions/controle-mobile.action';

class Produto extends Component {
    constructor() {
        super();
        this.state = {
            products: true
        }
    }

    componentWillMount() {
        this.setState({products: this.props.prod})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.prod.orderMaiorPreco === true) {
            const MAIOR_PRECO = this.state.products.sort(this.ordenaMaiorPreco);
            this.setState({products: MAIOR_PRECO})
            this.props.closeOrdenar()
        }
    }

    ordenaMaiorPreco (a,b) {
        if (a.product_preco > b.product_preco)
            return -1;

        if (a.product_preco < b.product_preco)
            return 1;

        return 0;
    }

    ordenaMenorPreco (a,b) {
        if (a.product_preco < b.product_preco)
            return -1;

        if (a.product_preco > b.product_preco)
            return 1;

        return 0;
    }

    render() {
        return (
            <section className="product">

            {   this.state.products.map((e) => {
                    return (
                        <div className="product-box columns small-6" key={e.id_product}>
                            <img src={e.product_image} alt="title" className="product-box--image"/>
                            <h2 className="product-box--prodtitle font-default">{e.product_title}</h2>
                            <div className="product-box--prodInfo font-default">
                                <h3 className="product-box--prodInfo_preco font-bold ">R${e.product_preco}</h3>
                                <h4 className="product-box--prodInfo_parcelas font-default">
                                    até 5x de R$ 30,00
                                </h4>
                            </div>
                            <button type="button" className="product-box--button buttons bg-yellow white"
                            onClick={() => this.props.addInCarrinho()}></button>
                        </div>
                    )
                })
            }
            </section>
        )
    }
}

const mapStateToProps = state => ({
  prod: state.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addInCarrinho, closeOrdenar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Produto)
