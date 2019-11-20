/*
 * @Author: xzt
 * @Date: 2019-11-20 11:46:01
 * @LastEditors: xzt
 * @LastEditTime: 2019-11-20 15:14:49
 * @Description: 
 * @FilePath: \react-my-prac\src\components\RouteComponent\main.js
 */
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import ReactDemo from './RouteComponent/index';

// 路由测试组件
import ReactRouterDemo from './ReactRouter/index'

// Redux测试组件
import ReduxFrom from './ReduxPrac/ReduxForm'

// React Redux测试组件
import ReactReduxDemo from './ReactReduxDemo'
// 引入Provider
import {Provider} from 'react-redux'
import ReactReduxStore from './ReactReduxDemo/store'

// Redux-Thunk测试组件
import ReduxThunkDemo from './ReduxThunkDemo'

// Redux-Saga测试组件
import ReduxSagaDemo from './ReduxSagaDemo'
import ReduxSagaStore from './ReduxSagaDemo/store'



function Main(){
    return(
        <Router>
            {/* react-component */}
            <ReactDemo/>
            {/* react-router */}
            <ReactRouterDemo/>
            {/* redux */}
            <ReduxFrom/>
            {/* react-redux */}
            <Provider store={ReactReduxStore}>
                <ReactReduxDemo/>
            </Provider>
            {/* redux-thunk */}
            <ReduxThunkDemo/>
            {/* redux-saga */}
            <Provider store={ReduxSagaStore}>
                <ReduxSagaDemo/>
            </Provider>
        </Router>
    )
}
export default Main