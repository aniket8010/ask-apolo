// Actions
export const UPDATE_ACTIVE_DOCTOR_CATEGORY = "UPDATE_ACTIVE_DOCTOR_CATEGORY"
export const UPDATE_DOCTORS_LIST = "UPDATE_DOCTORS_LIST"
export const UPDATE_DOCTORS_FILTERS = "UPDATE_DOCTORS_FILTERS"
export const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE"

const initialState = {
    activeDoctorsCategory: null,
    doctorsList: [],
    currentPage: 1,
    doctorsFilter: { category: "", gender: "", language: "", sort: "" }
}

export function HomePageReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DOCTORS_LIST:
            return { ...state, doctorsList: action.payload }
        case UPDATE_ACTIVE_DOCTOR_CATEGORY:
            return { ...state, activeDoctorsCategory: action.payload }
        case UPDATE_DOCTORS_FILTERS:
            return { ...state, doctorsFilter: action.payload }
        case UPDATE_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}