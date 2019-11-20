/*
 * @Author: xzt
 * @Date: 2019-11-20 14:03:40
 * @LastEditors: xzt
 * @LastEditTime: 2019-11-20 14:05:45
 * @Description: 
 * @FilePath: \react-my-prac\src\components\ReactRouter\index.js
 */
import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// 路由测试组件
// 基本路由
import BasicRouter from '../ReactRouter/BasicRouter'
// 嵌套路由
import EmbededRouter from '../ReactRouter/EmbededRouter'

export default function ReactRouter(){
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