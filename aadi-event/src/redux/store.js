import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// export default createStore(rootReducer, composeWithDevTools(
//     // applyMiddleware(...middleware),
//     // other store enhancers if any
//   ));

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

export default createStore(
    rootReducer, /* preloadedState, */
    enhancer
  );
