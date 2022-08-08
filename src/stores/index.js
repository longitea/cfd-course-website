import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";



// const thunk = store => next => action => {
//     if (typeof action === 'function') {
//         action(store.dispatch)
//         return
//     }
//     next(action)
// }

// sử dụng combine khi có nhiều Reducer cần quản lý

export let store = createStore(combineReducers({
    auth: authReducer
}),
    applyMiddleware(thunk, ) )