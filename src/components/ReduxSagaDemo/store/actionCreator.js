import {HANDLE_INPUT_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST, GET_TODO_LIST} from './actionType'

export const handleInputChangeAction = (inputValue) => ({
    type: HANDLE_INPUT_CHANGE,
    inputValue
})
export const addTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const deleteTodoItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initTodoListAction = (listArr) => ({
    type: INIT_TODO_LIST,
    listArr
})

export const getTodoListAction = () => ({
    type: GET_TODO_LIST
})