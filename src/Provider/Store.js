import { combineReducers, createStore } from "redux";
import { globalReducer } from "./Reducers/GlobalReducer/globalReducer";
import { HomePageReducer } from "./HomePage/HomePageReducers";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage
}
const reducer = combineReducers({
    globalReducer,
    HomePageReducer
})

const appPersistReducer = persistReducer(persistConfig, reducer)

export const store = createStore(appPersistReducer)
export let persistor = persistStore(store)