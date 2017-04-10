import React, {Component} from 'react';
import OrdenaBox from './ordena-box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openOrdenar } from '../actions/controle-mobile.action';

class Ordenar extends Component {
    render() {
        return (
            <div className="ordenar columns small-6">
                <div className="ordenar-title buttons cinza buttons-l_cinza buttons-l-paddings btn-title-ordenar"
                onClick={() => this.props.openOrdenar()}>
                    Ordenar
                </div>
                {this.props.mobileShow.ctrlMobileShow_ordena && <OrdenaBox/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  mobileShow: state.mobileShow,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ openOrdenar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Ordenar)
