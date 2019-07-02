import React from 'react'
// Part 1
// 计时器
// 1. 调用ReactDOM.render()更新UI界面
// function tick(){
//     const element = (
//         <div>
//             <h1>Hello,xzt1!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);

// 2. 封装真正可复用的Clock组件
// function Clock(props){
//     return(
//         <div>
//             <h1>Hello,xzt2!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
// setInterval(tick,1000);

// 3. 将函数组件转换为class组件
// class Clock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello,xzt3!</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
// setInterval(tick,1000);


// 4. 向class组件中添加局部的state
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    // 生命周期钩子-挂载
    componentDidMount(){
        // 设置定时器
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    // 生命周期钩子-卸载
    componentWillUnmount(){
        // 清除定时器
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div>
                <p>Part 1 计时器</p>
                <h3>Hello,xzt4!</h3>
                <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
            </div>
        )
    }
}

export default Clock
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
// )
