// Actions
export const UPDATE_LOCATION_DATA = "UPDATE_LOCATION_DATA"
export const UPDATE_ACTIVE_LOCATION = "UPDATE_ACTIVE_LOCATION"

const initialState = {
    locations: [],
    activeLocation: null
}

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOCATION_DATA:
            return { ...state, locations: action.payload ,activeLocation:action.payload[0]?.name || null}
        case UPDATE_ACTIVE_LOCATION:
            return { ...state, activeLocation: action.payload }
        default:
            return state
    }
}