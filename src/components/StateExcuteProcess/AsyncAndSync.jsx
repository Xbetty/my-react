/*
 * Author: xiongziting
 * Date: 2020-08-10 16:34:08
 * LastEditors: xiongziting
 * LastEditTime: 2020-08-10 17:33:29
 * Description:
 * FilePath: \react-my-prac\src\components\StateExcuteProcess\AsyncAndSync.jsx
 */

import React, { Component } from 'react';
class AsyncAndSync extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleExcute = this.handleExcute.bind(this);
  }

  componentDidMount() {}

  handleExcute() {
    this.setState({ count: 1 }, function () {
      console.log(`banana`);
    });
    console.log(`lemen`);

    setTimeout(() => {
      console.log(`grape`);
    }, 0);

    this.setState({ count: 2 }, () => {
      console.log(`strawberry`);
    });

    console.log(`pear`);
    // 链接：https://juejin.im/post/6844903568382623752

    setTimeout(() => {
      console.log('分割线====================');
      this.setState({ count: 1 }, function () {
        console.log(`banana`);
      });
      console.log(`lemen`);

      setTimeout(() => {
        console.log(`grape`);
      }, 0);

      this.setState({ count: 2 }, () => {
        console.log(`strawberry`);
      });

      console.log(`pear`);
    }, 0);
  }

  render() {
    return (
      <div>
        <p>
          同步与异步：<button onClick={this.handleExcute}>点击执行</button>
        </p>
      </div>
    );
  }
}

export default AsyncAndSync;
