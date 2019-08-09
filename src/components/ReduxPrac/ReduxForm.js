import React, {Component} from 'react';
import store from './store';
import {getInputChange, addTodoItem, deleteTodoItem} from './store/actionCreator';
class ReduxFrom extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            listArr: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleChangeState = this.handleChangeState.bind(this)
        // 订阅store
        store.subscribe(this.handleChangeState)
    }

    handleInputChange() {
        console.log('handleInputChange')
        const action = getInputChange(this.input.value)
        store.dispatch(action);
    }

    handleBtnClick() {
        console.log('handleBtnClick')
        const action = addTodoItem()
        store.dispatch(action);
    }

    handleDeleteItem(index) {
        console.log('handleDeleteItem')
        const action = deleteTodoItem(index)
        store.dispatch(action)
    }
 
    handleChangeState() {
        console.log('handleChangeState')
        console.log('store', store.getState())
        this.setState(store.getState())
    }

    render() {
        return (
            <div>
                 <h2>三. Redux Demo</h2>
                <input
                    style = {{
                        width: '300px',
                        height: '37px',
                        borderRadius: '5px',
                        border: 'none'
                    }}
                    value = {this.state.inputValue}
                    ref={input => this.input=input}
                    onChange = {this.handleInputChange}
                />
                <button
                    style = {{ 
                        marginLeft: '20px' ,
                        width: '100px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'green',
                        color: '#fff',
                        fontSize: "14px"
                    }}
                    onClick = {this.handleBtnClick}
                >
                    新增
                </button>
               <ul>
                    {this.state.listArr.map((item, index) => (
                            <li key={index} onClick={this.handleDeleteItem.bind(this, index)}>{index+1}:{item}</li>
                        ))}
               </ul>
            </div>
        )
    }
}
export default ReduxFrom;