export const addInCarrinho = () => {
    /**
        função que ao ser chamada (click carrinho de comprar no box produtos)
        adiciona +1 ao valor que existe no ícone de loja
    **/
    return dispatch => dispatch({
        type: 'ADD_CARRINHO'
    })
}
