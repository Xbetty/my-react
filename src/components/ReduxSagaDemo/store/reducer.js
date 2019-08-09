import {HANDLE_INPUT_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionType'

const defaultState = {
    inputValue: '',
    listArr: []
}

export default (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if (action.type === HANDLE_INPUT_CHANGE) {
        newState.inputValue = action.inputValue
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        newState.listArr.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_TODO_ITEM) {
        newState.listArr.splice(action.index, 1)
        return newState
    }
    return state
}