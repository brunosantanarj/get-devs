import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeFiltrar } from '../actions/controle-mobile.action';
import FiltrarCores from './filtrar-cores';
import FiltrarTamanho from './filtrar-tamanho';
import FiltrarPreco from './filtrar-preco';

class FiltrarBox extends Component {
    render() {
        return (
            <div className="mobile-fixed filtrar-box animated fadeInLeft">
                <div className="mobile-fixed--title">
                    FILTRAR
                    <span className="mobile-fixed_close" onClick={() => this.props.closeFiltrar()}></span>
                </div>
                <ul className="mobile-fixed--ul">
                    <li className="mobile-fixed--li">CORES <FiltrarCores/></li>
                    <li className="mobile-fixed--li">TAMANHOS <FiltrarTamanho/></li>
                    <li className="mobile-fixed--li">FAIXA DE PREÇO <FiltrarPreco/></li>
                </ul>
                <button type="button" className="bg-yellow white buttons buttons-l-paddings ">APLICAR</button>
                <button type="button" className="buttons buttons-l-paddings">LIMPAR</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  filtrar: state.mobileShow,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeFiltrar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FiltrarBox)
