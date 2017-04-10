export default ( state = 0, action ) => {
    switch (action.type) {
        case 'ADD_CARRINHO': {
            return state + 1
        }
        default: {
            return state
        }
    }
}
