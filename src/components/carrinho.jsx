import React, {Component} from 'react';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addInCarrinho } from '../actions/add-carrinho.action';

class Carrinho extends Component {
    render() {
        return (
            <div className="header-carrinho columns small-3">
                <span className="header-carrinhho--unit bg-yellow white">
                    {this.props.unit_product}
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  unit_product: state.carrinhoProduct,
});

// const mapDispatchToProps = dispatch =>
  // bindActionCreators({ addInCarrinho }, dispatch);
export default connect(mapStateToProps)(Carrinho)
