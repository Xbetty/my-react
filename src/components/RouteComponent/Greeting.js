/*
 * @Author: xzt
 * @Date: 2019-11-20 11:46:01
 * @LastEditors: xzt
 * @LastEditTime: 2019-11-20 13:54:49
 * @Description: 
 * @FilePath: \react-my-prac\src\components\RouteComponent\Greeting.js
 */
import React from 'react'
// Part 3 条件渲染对应组件
function UserGreeting(props){
    return <p>Part 3 条件渲染对应组件<br/>Welcome back!</p>
}
function GuestGreeting(props){
    return <p>Part 3 条件渲染对应组件<br/>Please sign up.</p>
}
// 创建Greeting组件，它会根据用户是否登录来决定显示上面的哪一个组件
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}
// ReactDOM.render(
//     <Greeting isLoggedIn={false}/>,
//     document.getElementById('root')
// )
export default Greeting
