import React from 'react';
class Toggle extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
        this.state = {isToggleOn: true}
        // 为了在回调中使用this，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this)
    }

    // 事件
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    // 渲染
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        )
    }
}
export default Toggle