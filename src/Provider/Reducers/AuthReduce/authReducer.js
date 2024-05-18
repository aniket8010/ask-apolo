export const UPDATE_USER_DATA = "UPDATE_USER_DATA"
export const UPDATE_JWT = "UPDATE_JWT"

const initialState = {
    user: null,
    jwt: null
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DATA:
            return { ...state, user: action.payload}
        case UPDATE_JWT:
            return { ...state, jwt: action.payload }
        default:
            return state
    }
} 