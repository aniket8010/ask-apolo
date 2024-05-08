import { combineReducers, createStore } from "redux";
import { globalReducer } from "./Reducers/GlobalReducer/globalReducer";

const reducer = combineReducers({
    globalReducer
})

export const store = createStore(reducer)