import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { defaultState } from "./defaultState";
import { rootReducer } from "./Reducers/rootReducer";
import thunk from 'redux-thunk'
import rootSaga from './Saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, thunk)
  )
)

sagaMiddleware.run(rootSaga)
