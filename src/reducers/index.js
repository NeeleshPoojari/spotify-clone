import { combineReducers } from 'redux';
import uiReducer from "./uiReducer";
import fetchData from "./fetchData";
import auth from "./auth";


export default combineReducers({
    uiReducer,
    fetchData,
    auth
});