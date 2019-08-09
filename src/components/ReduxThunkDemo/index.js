import React, {Component} from 'react'
// 引入store
import store from './store'
// 引入antd组件
import {Input, Button, List, Form, Typography} from  'antd'
// 引入action
import { handleInputChangeAction, addTodoItemAction, deleteTodoItemAction, getInitListAction } from './store/actionCreator';

class ReduxThunkDemo extends Component {
    constructor(props){
        super(props)
        // 初始化state
        this.state = store.getState()
        // 绑定this
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addTodoItem = this.addTodoItem.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        // 订阅store
        store.subscribe(this.handleStoreChange)
    }

    componentDidMount() {
        const action = getInitListAction()
        store.dispatch(action)
        
    }

    // store发生变化的回调
    handleStoreChange() {
        // 重置store的值
        this.setState(store.getState())
    }
    // 输入
    handleInputChange(e) {
        const action = handleInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    // 添加
    addTodoItem() {
        const action = addTodoItemAction()
        store.dispatch(action)
    }
    // 删除
    deleteTodoItem(index) {
        const action = deleteTodoItemAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{width: '450px'}}>
                <h2>五. Redux-Thunk Demo</h2>
                <Form layout='inline'>
                    <Form.Item>
                        <Input value={this.state.inputValue} size="large" placeholder='请输入内容' onChange={this.handleInputChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Button size="large" type="primary" onClick={this.addTodoItem}>新增</Button>
                    </Form.Item>
                </Form>
                <List
                style={{
                    marginTop: '20px'
                }}
                bordered
                dataSource={this.state.listArr}
                renderItem={(item, index) => (
                    <List.Item onClick={() => this.deleteTodoItem(index)}>
                        <Typography.Text mark>[{index}]</Typography.Text> {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }
}

export default ReduxThunkDemo