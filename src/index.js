import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


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
                <h1>Hello,xzt4!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
