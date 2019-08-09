import React, {Component} from 'react'
import {Form, Input, Button, List} from 'antd'
import {connect} from 'react-redux'
import { handleInputChangeAction, addTodoItemAction, deleteTodoItemAction, getTodoListAction } from './store/actionCreator';
import store from './store'

class ReduxSagaDemo extends Component {
    componentDidMount() {
        const action = getTodoListAction()
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{width: '450px'}}>
                <h2>六. Redux-Saga Demo</h2>
                <Form layout='inline'>
                    <Form.Item>
                        <Input placeholder='请输入内容' size="large" value={this.props.inputValue} onChange={this.props.handleInputChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large" onClick={this.props.addTodoItem}>新增</Button>
                    </Form.Item>
                </Form>
                <List
                style={{
                    marginTop: '20px'
                }}
                bordered
                dataSource={this.props.listArr}
                renderItem={(item, index) => (
                <List.Item onClick={() => this.props.deleteTodoItem(index)}>
                    {item}
                </List.Item>
                )}
            />
          </div>
        )
    }
}

const mapStateToProps = (state)  => ({
    inputValue: state.inputValue,
    listArr: state.listArr
})
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = handleInputChangeAction(e.target.value)
            dispatch(action)
        },
        addTodoItem() {
            const action = addTodoItemAction()
            dispatch(action)
        },
        deleteTodoItem(index) {
            const action = deleteTodoItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSagaDemo)