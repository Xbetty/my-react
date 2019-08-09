import React, { Component } from 'react'
// 引入antd组件
import {Input, Button, Form, List, Typography} from 'antd'
// 引入connect
import {connect} from 'react-redux'
// 引入actionCreator
import {handleInputChangeAction, addTodoItemAction, deleteTodoItemAction} from './store/actionCreator'

class ReactReduxDemo extends Component {
    render() {
        return(
            <div style={{
                width: '450px',
                height: 'auto',
                margin: '0 auto'
            }}>
                <h2>四. React-Redux Demo</h2>
                <Form layout='inline'>
                    <Form.Item >
                        <Input
                        value={this.props.inputValue}
                        placeholder="请输入内容"
                        size="large"
                        style={{
                            width: '300px'
                        }}
                        onChange={this.props.handleInputChange}
                    />
                    </Form.Item>
                    <Form.Item>
                        <Button
                        size="large"
                        type="primary"
                        onClick={this.props.addTodoItem}
                    >
                        新增
                    </Button>
                    </Form.Item>
                </Form>
                <List
                style={{
                    marginTop: '20px'
                }}
                bordered
                dataSource={this.props.listArr}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => this.props.deleteTodoItem(index)}
                    >
                        <Typography.Text 
                            mark
                            style={{
                                marginRight: '20px'
                            }}
                        >
                            【{index+1}】 
                        </Typography.Text> 
                        {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxDemo)