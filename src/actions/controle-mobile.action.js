export const openOrdenar = () => {
    return dispatch => dispatch({
        type: 'OPEN_ORDENAR',
        payload: true
    })
}

export const closeOrdenar = () => {
    return dispatch => dispatch({
        type: 'CLOSE_ORDENAR',
        payload: false
    })
}

export const openFiltrar = () => {
    return dispatch => dispatch({
        type: 'OPEN_FILTRAR',
        payload: true
    })
}

export const closeFiltrar = () => {
    return dispatch => dispatch({
        type: 'CLOSE_FILTRAR',
        payload: false
    })
}

export const openFiltrarCores = () => {
    return dispatch => dispatch ({
        type: 'OPEN_FILTRAR_CORES',
        payload: true
    })
}

export const closeFiltrarCores = () => {
    return dispatch => dispatch ({
        type: 'CLOSE_FILTRAR_CORES',
        payload: false
    })
}

export const openFiltrarTamanhos = () => {
    return dispatch => dispatch ({
        type: 'OPEN_FILTRAR_TAMANHOS',
        payload: true
    })
}

export const closeFiltrarTamanhos = () => {
    return dispatch => dispatch ({
        type: 'CLOSE_FILTRAR_TAMANHOS',
        payload: false
    })
}

export const openFiltrarValores = () => {
    return dispatch => dispatch ({
        type: 'OPEN_FILTRAR_VALORES',
        payload: true
    })
}

export const closeFiltrarValores = () => {
    return dispatch => dispatch ({
        type: 'CLOSE_FILTRAR_VALORES',
        payload: false
    })
}
