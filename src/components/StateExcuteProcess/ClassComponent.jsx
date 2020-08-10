/*
 * Author: xiongziting
 * Date: 2020-08-10 16:34:08
 * LastEditors: xiongziting
 * LastEditTime: 2020-08-10 17:27:57
 * Description:
 * FilePath: \react-my-prac\src\components\StateExcuteProcess\ClassComponent.jsx
 */

import React, { Component } from 'react';
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 0 };
    this.handleClassCom = this.handleClassCom.bind(this);
  }
  componentDidMount() {
    var btn = this.refs.btn;
    console.log('btn', btn);
    btn.addEventListener('click', this.handleClassCom, false);
  }
  handleClassCom() {
    console.log('a0', this.state.a);
    let { a } = this.state;
    this.setState({ a: 1 }, () => {
      console.log('a1', this.state.a);
    });
    setTimeout(() => {
      this.setState({ a: 2 }, () => {
        console.log('a2', this.state.a);
      });
      this.setState({ a: 3 }, () => {
        console.log('a3', this.state.a);
      });
    }, 3);
    this.setState({ a: 4 }, () => {
      console.log('a4', this.state.a);
    });
  }

  render() {
    console.log('a', this.state.a);
    return (
      <div>
        <p>
          state执行过程：<span>{this.state.a}</span>
        </p>
        <button onClick={this.handleClassCom}>class组件合成事件</button>
        <button ref="btn">class组件原生事件</button>
      </div>
    );
  }
}

export default ClassComponent;
