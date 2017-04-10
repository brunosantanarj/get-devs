import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeOrdenar } from '../actions/controle-mobile.action';

class OrdenaBox extends Component {
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
                    <li className="mobile-fixed--li">Maior preço</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  ordena: state.mobileShow, 
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeOrdenar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(OrdenaBox)