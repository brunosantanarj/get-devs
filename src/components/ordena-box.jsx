import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeOrdenar } from '../actions/controle-mobile.action';
import { ordenaMaiorPreco } from '../actions/ordena.action'

class OrdenaBox extends Component {
    constructor() {
        super();
        this.state = {
            orderByMaiorPreco: false
        }
    }

    ordenaMaiorPreco(a,b) {
        if (a.product_preco < b.product_preco)
            return -1;

        if (a.product_preco > b.product_preco)
            return 1;

        return 0;
    }

    render() {
        return (
            <div className="mobile-fixed ordena-box animated fadeInLeft">
                <div className="mobile-fixed--title">
                    ORDENAR
                    <span className="mobile-fixed_close"
                    onClick={() => this.props.closeOrdenar()}></span>
                </div>
                <ul className="mobile-fixed--ul">
                    <li className="mobile-fixed--li">Mais recentes</li>
                    <li className="mobile-fixed--li">Menor preço</li>
                    <li className="mobile-fixed--li" onClick={() => this.props.ordenaMaiorPreco()}>Maior preço</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  ordena: state.mobileShow,
  order: state.ordena,
  prod: state.products,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeOrdenar, ordenaMaiorPreco }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(OrdenaBox)
