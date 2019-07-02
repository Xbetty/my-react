import React from 'react'
// Part 4 元素变量渲染部分组件
function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}
function UserGreeting(props){
    return <h4>Welcome back!</h4>
}
function GuestGreeting(props){
    return <h4>Please sign up.</h4>
}
// 创建Greeting组件，它会根据用户是否登录来决定显示上面的哪一个组件
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}
class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn
        let button

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else{
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return(
            <div>
                <p>Part 4 元素变量渲染部分组件</p>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export default LoginControl
// ReactDOM.render(
//     <LoginControl/>,
//     document.getElementById('root')
// )