import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    // 创建一个store的时候要传入reducer
    reducer,
    // 引入redux的调试
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;