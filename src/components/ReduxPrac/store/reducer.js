const defaultState = {
    inputValue: '',
    listArr: []
}
export default (state = defaultState, action) => {
    console.log(action)
    if (action.type === 'getInputChange') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.inputValue
        return newState
    }
    if (action.type === 'addTodoItem') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.listArr.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'deleteTodoItem') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.listArr.splice(action.index, 1)
        return newState
    }
}