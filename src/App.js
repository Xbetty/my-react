import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
// import Main from './components/RouteComponent/main'
// 高阶组件
import A from './components/HighOrderComponents/A'
import B from './components/HighOrderComponents/B'
import C from './components/HighOrderComponents/C'

// 基本路由
// import BasicRouter from './components/ReactRouter/BasicRouter'
// 嵌套路由
// import EmbededRouter from './components/ReactRouter/EmbededRouter'

// // js函数定义react组件
// function First(props){
//   return <h5>这是你的第{props.times}个项目！</h5>
// }
// // class定义react组件
// class Welcome extends React.Component{
//   render(){
//     return <h4>Hello,{this.props.name}~</h4>
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Main/> */}
        {/* 引入基本路由组件 */}
        {/* <BasicRouter/> */}
        {/* 引入嵌套路由组件 */}
        {/* <EmbededRouter/> */}


        {/* 引用组件Welcome */}
        {/* <Welcome name="一只熊啊"/> */}
        {/* <Welcome name="Yvonne"/> */}
        {/* <Welcome name="Xbetty"/> */}
        {/* 引用组件Hello */}
        {/* <First times="first"/> */}

        {/* 高阶组件 */}
        <A/>
        <B/>
        <C/>
      </header>
    </div>
  );
}

export default App;
