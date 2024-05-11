// Actions
export const UPDATE_ACTIVE_DOCTOR_CATEGORY = "UPDATE_ACTIVE_DOCTOR_CATEGORY"
export const UPDATE_DOCTORS_LIST = "UPDATE_DOCTORS_LIST"

const initialState = {
    activeDoctorsCategory: null,
    doctorsList: []
}

export function HomePageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DOCTORS_LIST:
            return { ...state, doctorsList: action.payload }
        case UPDATE_ACTIVE_DOCTOR_CATEGORY:
            return { ...state, activeDoctorsCategory: action.payload }
        default:
            return state
    }
}