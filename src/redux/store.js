import {legacy_createStore as createStore, applyMiddleware } from "redux";
import {tasksReducder} from './tasksReducer/tasksReducer'
import thunk from "redux-thunk";



const store = createStore(tasksReducder, applyMiddleware(thunk));


export default store;