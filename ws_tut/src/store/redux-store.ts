import {Action, combineReducers, compose, createStore} from "redux";
import chatReducer from "./chat-reducer";
import {ThunkAction} from "redux-thunk";

let rootReducer = combineReducers({
    chat: chatReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

// @ts-ignore
window.__store__ = store;

export default store;