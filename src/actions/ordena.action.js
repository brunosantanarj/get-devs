import {products} from '../reducers/produto.reducer';
export const ordenaMaiorPreco = () => {
    
    return dispatch => dispatch({
        type: 'ORDER_PRODUCT_MAIORPRECO',
        payload: true
    })
}
