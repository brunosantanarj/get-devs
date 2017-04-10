import {combineReducers} from 'redux';
import mobileShow from './controle-mobile.reducer';
import carrinhoProduct from './add-carrinho.reducer';
import products from './produto.reducer';
export default combineReducers({
    mobileShow,
    carrinhoProduct,
    products
})
