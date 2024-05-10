import { combineReducers, createStore } from "redux";
import { globalReducer } from "./Reducers/GlobalReducer/globalReducer";
import { HomePageReducer } from "./HomePage/HomePageReducers";

const reducer = combineReducers({
    globalReducer,
    HomePageReducer
})

export const store = createStore(reducer)