export const getInputChange = (value) =>  ({
    type: 'getInputChange',
    inputValue: value
})
export const addTodoItem = () =>  ({
    type: 'addTodoItem'
})
export const deleteTodoItem = (index) =>  ({
    type: 'deleteTodoItem',
    index
})
