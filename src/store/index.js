import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer);
// sagaMiddleware.run(rootSaga);

export default store;