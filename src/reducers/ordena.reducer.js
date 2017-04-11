const initalState = {}
export default (state = initalState, action) => {
    switch (action.type) {
        case 'ORDER_MAIOR_PRECO': {
            return {
                ...state,
                order: action.payload
            }
        }
        default: {
            return state
        }
    }
}
