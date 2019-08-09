import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import mysaga from './mysaga'

// 创建中间件
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mysaga)

export default store