import {put, takeEvery} from 'redux-saga/effects'
import {initTodoListAction} from './actionCreator'
import axios from 'axios'
import {GET_TODO_LIST} from './actionType'

function* mySaga() {
    yield takeEvery(GET_TODO_LIST, getTodoList)
}

function* getTodoList() {
    try {
        const res = yield axios.get('https://getman.cn/mock/api/todolist')
        console.log('res', res)

        const action = initTodoListAction(res.data)
        yield put(action)
    } catch (error) {
        console.log(error)
    }
}
export default mySaga