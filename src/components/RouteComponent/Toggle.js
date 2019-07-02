import React from 'react'
// Part 2 切换开关状态的按钮 
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
            <div>
                <p>Part 2 切换开关状态的按钮 </p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn?'ON':'OFF'}
                </button>
            </div>
        )
    }
}
// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// )

export default Toggle