//classes com prod<Name> significam que fazem parte de prodUTO
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addInCarrinho } from '../actions/add-carrinho.action';

class Produto extends Component {
    render() {
        return (
            <div className="product">
            {
                this.props.prod.map((e) => {
                    return (
                        <div className="product-box columns small-6">
                            <img src={e.product_image} alt="title" className="product-box--image"/>
                            <h2 className="product-box--prodtitle font-default">{e.product_title}</h2>
                            <div className="product-box--prodInfo font-default">
                                <h3 className="product-box--prodInfo_preco font-bold ">R${e.product_preco}</h3>
                                <h4 className="product-box--prodInfo_parceloas font-default">
                                    até 5x de R$ 30,00
                                </h4>
                            </div>
                            <button type="button" className="product-box--button buttons bg-yellow white buttons"
                            onClick={() => this.props.addInCarrinho()}>
                                s{
                                    //Buttão adicionar carrinho
                                }
                            </button>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
  prod: state.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addInCarrinho }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Produto)
