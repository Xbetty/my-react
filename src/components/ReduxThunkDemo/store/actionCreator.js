import {HANDLE_INPUT_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_ITEM} from './actionType'
// 引入axios
import axios from 'axios'

export const handleInputChangeAction = (inputValue) => ({
    type: HANDLE_INPUT_CHANGE,
    inputValue
})
export const addTodoItemAction = () =>  ({
    type: ADD_TODO_ITEM
})
export const deleteTodoItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (listArr) => ({
    type: INIT_TODO_ITEM,
    listArr
})

// redux-thunk异步初始化listArr数据
export const getInitListAction = () => {
    return (dispatch) => {
        try {
            axios.get('https://getman.cn/mock/api/todolist')
            .then(({data}) => {
                const action = initListAction(data)
                dispatch(action)
            })
        } catch (error) {
            console.log(error)
        }
    }
}