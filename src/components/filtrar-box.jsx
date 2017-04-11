import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FiltrarCores from './filtrar-cores';
import FiltrarTamanho from './filtrar-tamanho';
import FiltrarPreco from './filtrar-preco';
import {
    closeFiltrar,
    openFiltrarCores,
    openFiltrarTamanhos,
    openFiltrarValores,
    closeFiltrarCores,
    closeFiltrarTamanhos,
    closeFiltrarValores
} from '../actions/controle-mobile.action';

class FiltrarBox extends Component {
    constructor() {
        super();
        this.state = {
            boolTamanho: true,
            boolCores: true,
            boolValores: true
        }
    }

    controleCores() {
        if(this.state.boolCores === true) {
            this.props.openFiltrarCores();
            this.setState({boolCores: !this.state.boolCores});
        } else {
            this.setState({boolCores: !this.state.boolCores});
            this.props.closeFiltrarCores();
        }
    }

    controleTamanho() {
        if(this.state.boolTamanho === true) {
            this.props.openFiltrarTamanhos();
            this.setState({boolTamanho: !this.state.boolTamanho});
        } else {
            this.props.closeFiltrarTamanhos();
            this.setState({boolTamanho: !this.state.boolTamanho});
        }
    }

    controleValores() {
        if(this.state.boolValores === true) {
            this.props.openFiltrarValores();
            this.setState({boolValores: !this.state.boolValores});
        } else {
            this.props.closeFiltrarValores();
            this.setState({boolValores: !this.state.boolValores});
        }
    }

    coresExpand() {
        return(
            this.state.boolCores === true ?
                'mobile-fixed--li_title':
                'mobile-fixed--li_title mobile-fixed--li-close'
        )
    }

    tamanhoExpand() {
        return(
            this.state.boolTamanho === true ?
                'mobile-fixed--li_title':
                'mobile-fixed--li_title mobile-fixed--li-close'
        )
    }

    valoresExpand() {
        return(
            this.state.boolValores === true ?
                'mobile-fixed--li_title':
                'mobile-fixed--li_title mobile-fixed--li-close'
        )
    }

    render() {
        return (
            <div className="mobile-fixed filtrar-box animated fadeInLeft">
                <div className="mobile-fixed--title">
                    FILTRAR
                    <span className="mobile-fixed_close" onClick={() => this.props.closeFiltrar()}></span>
                </div>
                <ul className="mobile-fixed--ul">
                    <li className="mobile-fixed--li mobile-fixed--li_title">
                        <span className={this.coresExpand('')} onClick={() => this.controleCores()}>
                            CORES
                        </span>
                        { this.props.controle.ctrlMobileShow_filtrar_cores && <FiltrarCores/> }
                    </li>
                    <li className="mobile-fixed--li mobile-fixed--li_title">
                        <span className={this.tamanhoExpand('')} onClick={() => this.controleTamanho()}>
                            TAMANHOS
                        </span>
                        { this.props.controle.ctrlMobileShow_filtrar_tamanhos && <FiltrarTamanho/> }
                    </li>
                    <li className="mobile-fixed--li mobile-fixed--li_title">
                        <span className={this.valoresExpand('')} onClick={() => this.controleValores()}>
                            FAIXA DE PREÇO
                        </span>
                        { this.props.controle.ctrlMobileShow_filtrar_valores && <FiltrarPreco/> }
                    </li>
                </ul>
                <button
                    type="button"
                    className="bg-yellow white buttons buttons-l-paddings filtrar-box--buttons font-default">
                    APLICAR
                </button>
                <button
                    type="button"
                    className="buttons buttons-l-paddings filtrar-box--buttons cinza font-default">
                    LIMPAR
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  filtrar: state.mobileShow,
  controle: state.mobileShow
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      closeFiltrar,
      openFiltrarCores,
      openFiltrarTamanhos,
      openFiltrarValores,
      closeFiltrarCores,
      closeFiltrarTamanhos,
      closeFiltrarValores
  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FiltrarBox)
