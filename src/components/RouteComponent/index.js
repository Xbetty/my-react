/*
 * @Author: xzt
 * @Date: 2019-11-20 13:56:16
 * @LastEditors: xzt
 * @LastEditTime: 2019-11-20 15:13:59
 * @Description: 
 * @FilePath: \react-my-prac\src\components\RouteComponent\index.js
 */
import React, {Fragment} from 'react'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'

import Clock from './Clock'
import Toggle from './Toggle'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import MailBox from './MailBox'
import Page from './Page'

export default function Demo(){
    const message = ['react', 'Re:react', 'Re:Re:react']
    return(
        <Fragment>
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
                    <Link to={{path: '/mailBox', query: {message}}}>Part 5 与运算符&&</Link>
                </li>
                <li>
                    <Link to="/page">Part 6 阻止组件渲染</Link>
                </li>
            </ul>

            <Route path="/clock" component={Clock}/>
            <Route path="/toggle" component={Toggle}/>
            <Route path="/greeting" component={Greeting}/>
            <Route path="/loginControl" component={LoginControl}/>
            <Route path="/mailBox" component={MailBox}/>
            <Route path="/page" component={Page}/>
        </Fragment>
    )
}