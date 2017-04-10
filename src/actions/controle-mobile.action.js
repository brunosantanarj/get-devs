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