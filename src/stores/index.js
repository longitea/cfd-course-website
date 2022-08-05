import { combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";

// sử dụng combine khi có nhiều Reducer cần quản lý
export let store = createStore(combineReducers({
    auth: authReducer,
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)