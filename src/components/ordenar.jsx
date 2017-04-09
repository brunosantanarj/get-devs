import React, {Component} from 'react';
import OrdenaBox from './ordena-box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { open } from '../actions/controle-mobile.action';

class Ordenar extends Component {
    render() {
        return (
            <div className="ordenar columns small-6">    
                <div className="ordenar-title btn-title btn-title-ordenar"
                onClick={() => this.props.open()}>
                    Ordenar
                </div>
                {this.props.mobileShow.ctrlMobileShow && <OrdenaBox/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  mobileShow: state.mobileShow, 
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ open }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Ordenar)