import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Clock from './Clock'
import Toggle from './Toggle'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import MailBox from './MailBox'
import Page from './Page'
import BasicRouter from './../ReactRouter/BasicRouter'
import EmbededRouter from './../ReactRouter/EmbededRouter'
import ReduxFrom from '../ReduxPrac/ReduxForm'
// React Demos
function Demo(){
    const message = ['react', 'Re:react', 'Re:Re:react']
    return(
        <div>
            <h2>一. React-Demos</h2>
            
            <ul>
                <li>
                    <Link to="/clock">Part 1 计时器</Link>
                </li>
                <li>
                    <Link to="/toggle">Part 2 切换开关状态的按钮 </Link>
                </li>
                <li>
                    <Link to="/greeting">Part 3 条件渲染对应组件</Link>
                </li>
                <li>
                    <Link to="/loginControl">Part 4 元素变量渲染部分组件</Link>
                </li>
                <li>
                    <Link to={{path: '/mailBox', unreadMessages: {message}}}>Part 5 与运算符&&</Link>
                </li>
                <li>
                    <Link to="/page">Part 6 阻止组件渲染</Link>
                </li>
                {/* <li>
                    <Link to="/clock">Part 7 列表&Key 生成1-5的项目符号列表</Link>
                </li>
                <li>
                    <Link to="/clock">Part 8 基础列表组件</Link>
                </li>
                <li>
                    <Link to="/clock">Part 9 正确使用key的方式</Link>
                </li>
                <li>
                    <Link to="/clock">Part 10 key只是在兄弟节点之间必须唯一</Link>
                </li>
                <li>
                    <Link to="/clock">Part 11 表单</Link>
                </li>
                <li>
                    <Link to="/clock">Part 12 select标签</Link>
                </li>
                <li>
                    <Link to="/clock">Part 13 处理多个输入</Link>
                </li>
                <li>
                    <Link to="/clock">Part 14 状态提升之计算水在给定温度下是否会沸腾的温度计算器</Link>
                </li>
                <li>
                    <Link to="/clock">Part 15  摄氏度与华氏温度</Link>
                </li>
                <li>
                    <Link to="/clock">Part 16 包含关系之通过JSX嵌套，将任意组件作为子组件传递给它们</Link>
                </li>
                <li>
                    <Link to="/clock">Part 17 使用相应的prop传递组件而不使用children</Link>
                </li>
                <li>
                    <Link to="/clock">Part 18 特例关系</Link>
                </li>
                <li>
                    <Link to="/clock">Part 19 以class方式定义的组件</Link>
                </li> */}

            </ul>
            
            <Route path="/clock" component={Clock}/>
            <Route path="/toggle" component={Toggle}/>
            <Route path="/greeting" component={Greeting}/>
            <Route path="/loginControl" component={LoginControl}/>
            <Route path="/mailBox" component={MailBox}/>
            <Route path="/page" component={Page}/>
            
        </div>
    )
}
// React Router
function ReactRouter(){
    return(
        <Fragment>
            <h2>二. React Router</h2>
            
            <ul>
                <li>
                    <Link to="/basic">1. Basic Router</Link>
                </li>
                <li>
                    <Link to="/embeded">2. Embeded Router</Link>
                </li>
            </ul>

            <Route path="/basic" component={BasicRouter}/>
            <Route path="/embeded" component={EmbededRouter}/>
        </Fragment>
    )
}
function Main(){
    return(
        <Router>
            <Demo/>
            <ReactRouter/>
            <ReduxFrom/>
        </Router>
    )
}
export default Main