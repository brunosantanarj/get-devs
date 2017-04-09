export const open = () => {
    return dispatch => dispatch({
        type: 'OPEN',
        payload: true
    })
}

export const close = () => {
    return dispatch => dispatch({
        type: 'CLOSE',
        payload: false
    })
}