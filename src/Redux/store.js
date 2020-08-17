import {createStore, combineReducers} from 'redux'
import {reducerPosts} from "./reducerPosts";
import {reducerDialogs} from "./reducerDialogs";

let reducers = combineReducers({
    home: reducerPosts,
    dialogs: reducerDialogs
})


export const store = createStore(reducers)


