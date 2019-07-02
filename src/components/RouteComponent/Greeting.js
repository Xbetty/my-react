import React from 'react'
// Part 3 条件渲染对应组件
function UserGreeting(props){
    return <h4>Part 3 条件渲染对应组件,Welcome back!</h4>
}
function GuestGreeting(props){
    return <h4>Part 3 条件渲染对应组件,Please sign up.</h4>
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
