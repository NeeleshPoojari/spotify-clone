import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const InitialState = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  InitialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
