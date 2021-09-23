import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducers from "./Reducer/rootReducer";

const middlewares = [reduxThunk];
if (process.env.NODE_ENV === "developement") {
  middlewares.push(composeWithDevTools);
}

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
