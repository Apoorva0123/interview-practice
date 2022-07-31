import {
    legacy_createStore as creatStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  
  import thunk from "redux-thunk";
  import { composeWithDevTools } from "redux-devtools-extension";
  import { companyReducer } from "./reducer";
  
  const rootReducer = combineReducers({
   companies: companyReducer
  });
  
  export const store = creatStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );