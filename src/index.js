import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// Part 0
// ReactDOM.render(<App />, document.getElementById('root'));


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
// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//     }
//     // 生命周期钩子-挂载
//     componentDidMount(){
//         // 设置定时器
//         this.timerID = setInterval(
//             () => this.tick(), 1000
//         );
//     }
//     // 生命周期钩子-卸载
//     componentWillUnmount(){
//         // 清除定时器
//         clearInterval(this.timerID);
//     }
//     tick(){
//         this.setState({
//             date: new Date()
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello,xzt4!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
// )


// Part 2 切换开关状态的按钮 
// class Toggle extends React.Component{
//     // 构造函数
//     constructor(props){
//         super(props)
//         this.state = {isToggleOn: true}
//         // 为了在回调中使用this，这个绑定是必不可少的
//         this.handleClick = this.handleClick.bind(this)
//     }

//     // 事件
//     handleClick(){
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }))
//     }

//     // 渲染
//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn?'ON':'OFF'}
//             </button>
//         )
//     }
// }
// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// )


// // Part 3 条件渲染对应组件
// function UserGreeting(props){
//     return <h1>Welcome back!</h1>
// }
// function GuestGreeting(props){
//     return <h1>Please sign up.</h1>
// }
// // 创建Greeting组件，它会根据用户是否登录来决定显示上面的哪一个组件
// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting/>
//     }
//     return <GuestGreeting/>
// }
// ReactDOM.render(
//     <Greeting isLoggedIn={false}/>,
//     document.getElementById('root')
// )


// // Part 4 元素变量渲染部分组件
// function LoginButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//         this.state = {isLoggedIn: false}
//     }

//     handleLoginClick(){
//         this.setState({isLoggedIn: true})
//     }
//     handleLogoutClick(){
//         this.setState({isLoggedIn: false})
//     }

//     render(){
//         const isLoggedIn = this.state.isLoggedIn
//         let button

//         if(isLoggedIn){
//             button = <LogoutButton onClick={this.handleLogoutClick}/>
//         } else{
//             button = <LoginButton onClick={this.handleLoginClick}/>
//         }

//         return(
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <LoginControl/>,
//     document.getElementById('root')
// )

// Part 5 与运算符&&
// function Mailbox(props){
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread message.
//                 </h2>
//             }
//         </div>
//     );
// }

// const message = ['react', 'Re:react', 'Re:Re:react']
// ReactDOM.render(
//     <Mailbox unreadMessages={message}/>,
//     document.getElementById('root')
// )

// Part 6 阻止组件渲染
// function WarningBanner(props){
//     if(!props.warn){
//         return null
//     }

//     return(
//         <div className="warning">
//             Warning!
//         </div>
//     )
// }

// class Page extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {showWarning: true}
//         this.handleToggleClick = this.handleToggleClick.bind(this)
//     }

//     handleToggleClick(){
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }))
//     }

//     render(){
//         return(
//             <div>
//                 <WarningBanner warn={this.state.showWarning}/>
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide': 'Show'}
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Page/>,
//     document.getElementById('root')
// )


// Part 7 列表&Key 生成1-5的项目符号列表
// const numbers = [1,2,3,4,5]
// const listItems = numbers.map((number) => <li>{number}</li>)
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// )

// Part 8 基础列表组件
// function NumberList(props){
//     const numbers = props.numbers
//     const listItems = numbers.map((item) => 
//         <li key={item.toString()}>
//             {item}
//         </li>
//     )
//     return (
//         <ul>{listItems}</ul>
//     )
// }

// const numbers = [1,2,3,4,5,6]
// ReactDOM.render(
//     <NumberList numbers={numbers}/>,
//     document.getElementById('root')
// )

// Part 9 正确使用key的方式
// function ListItem(props){
//     // 这里不需要指定key
//     return <li>{props.value}</li>
// }

// function NumberList(props){
//     const numbers = props.numbers
//     const listItems = numbers.map((item) => 
//         <ListItem key={item.toString()} value={item}/>
//     )

//     return (
//         <ul>
//             {listItems}
//         </ul>
//     )
// }

// const numbers = [1,2,3,4,5,6,7]
// ReactDOM.render(
//     <NumberList numbers={numbers}/>,
//     document.getElementById('root')
// )


// Part 10 key只是在兄弟节点之间必须唯一
// function Blog(props){
//     const sidebar = (
//         <ul>
//             {props.posts.map((item) => 
//                 <li key={item.id}>
//                     {item.title}
//                 </li>
//             )}
//         </ul>
//     )

//     const content = props.posts.map((item) =>
//         <div key={item.id}>
//             <h3>{item.id} . {item.title}</h3>
//             <p>{item.content}</p>
//         </div>
//     )

//     return(
//         <div>
//             {sidebar}
//             <hr/>
//             {content}
//         </div>
//     )
// }

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ]

// ReactDOM.render(
//     <Blog posts={posts}/>,
//     document.getElementById('root')
// )

// Part 11 表单
// class NameForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={value: ''}

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }

//     handleSubmit(event){
//         console.log('提交的名字：', this.state.value)
//         event.preventDefault()
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字：
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="提交"/>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <NameForm/>,
//     document.getElementById('root')
// )


// // Part 12 select标签
// class FlavorForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {value: 'coconut'}

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }

//     handleSubmit(event){
//         console.log('你喜欢的风味是：', this.state.value)
//         event.preventDefault()
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     选择你喜欢的风味：
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">葡萄柚</option>
//                         <option value="lime">柠檬</option>
//                         <option vlaue="coconut">椰子</option>
//                         <option value="mango">芒果</option>
//                     </select>
//                 </label>
//                 {/* 多选 */}
//                 {/* <select multiple={true} value={['a','c']} onChange={this.handleChange}>
//                     <option value="a">aaaaaaaaaaaaaaaa</option>
//                     <option value="b">bbbbbbbbbbbbb</option>
//                     <option value="c">ccccccccccccccccc</option>
//                 </select> */}
//                 <input type="submit" value="提交"/>
//             </form>
//         )
//     }

// }

// ReactDOM.render(
//     <FlavorForm/>,
//     document.getElementById('root')
// )


// Part 13 处理多个输入
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('name', [name])
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
