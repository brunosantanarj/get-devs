import React, {Component} from 'react';
import FiltrarBox from './filtrar-box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { open } from '../actions/controle-mobile.action';
class Filtrar extends Component {
    render() {
        return (
            <div className="filtrar columns small-6">
                <div className="filtrar-title btn-title btn-title--filtrar" onClick={() => this.props.open()}>
                    Filtrar
                </div>
                {this.props.mobileShow.ctrlMobileShow && <FiltrarBox/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  mobileShow: state.mobileShow, 
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ open }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Filtrar)