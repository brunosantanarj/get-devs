import React, {Component} from 'react';
import FiltrarBox from './filtrar-box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openFiltrar } from '../actions/controle-mobile.action';
class Filtrar extends Component {
    render() {
        return (
            <div className="filtrar columns small-6">
                <div className="filtrar-title buttons cinza buttons-l_cinza buttons-l-paddings btn-title--filtrar" onClick={() => this.props.openFiltrar()}>
                    Filtrar
                </div>
                {this.props.mobileShow.ctrlMobileShow_filtrar && <FiltrarBox/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  mobileShow: state.mobileShow,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openFiltrar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Filtrar)
