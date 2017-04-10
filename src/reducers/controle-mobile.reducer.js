const initialState = {}
export default (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_ORDENAR': {
            return {
                ...state,
                ctrlMobileShow_ordena: action.payload
            }
        }
        case 'CLOSE_ORDENAR': {
            return {
                ...state,
                ctrlMobileShow_ordena: action.payload
            }
        }
        case 'OPEN_FILTRAR': {
            return {
                ...state,
                ctrlMobileShow_filtrar: action.payload
            }
        }
        case 'CLOSE_FILTRAR': {
            return {
                ...state,
                ctrlMobileShow_filtrar: action.payload
            }
        }
        default: {
            return state
        }
    }
}