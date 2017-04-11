const initialState = false
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
        case 'OPEN_FILTRAR_CORES': {
            return {
                ...state,
                ctrlMobileShow_filtrar_cores: action.payload
            }
        }
        case 'CLOSE_FILTRAR_CORES': {
            return {
                ...state,
                ctrlMobileShow_filtrar_cores: action.payload
            }
        }
        case 'OPEN_FILTRAR_TAMANHOS': {
            return {
                ...state,
                ctrlMobileShow_filtrar_tamanhos: action.payload
            }
        }
        case 'CLOSE_FILTRAR_TAMANHOS': {
            return {
                ...state,
                ctrlMobileShow_filtrar_tamanhos: action.payload
            }
        }
        case 'OPEN_FILTRAR_VALORES': {
            return {
                ...state,
                ctrlMobileShow_filtrar_valores: action.payload
            }
        }
        case 'CLOSE_FILTRAR_VALORES': {
            return {
                ...state,
                ctrlMobileShow_filtrar_valores: action.payload
            }
        }
        default: {
            return state
        }
    }
}
