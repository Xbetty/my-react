import React from 'react';
import logo from './logo.svg';
import './App.css';

// js函数定义react组件
function First(props){
  return <h5>这是你的第{props.times}个项目！</h5>
}
// class定义react组件
class Welcome extends React.Component{
  render(){
    return <h4>Hello,{this.props.name}~</h4>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 引用组件Welcome */}
        <Welcome name="一只熊啊"/>
        <Welcome name="Yvonne"/>
        <Welcome name="Xbetty"/>
        {/* 引用组件Hello */}
        <First times="first"/>

        {/* 默认代码 */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
