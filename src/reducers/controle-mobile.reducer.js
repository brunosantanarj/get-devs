const initialState = {}
export default (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN': {
            return {
                ...state,
                ctrlMobileShow: action.payload
            }
        }
        case 'CLOSE': {
            return {
                ...state,
                ctrlMobileShow: action.payload
            }
        }
        default: {
            return state
        }
    }
}