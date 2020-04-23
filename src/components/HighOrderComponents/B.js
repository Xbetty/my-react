import React, { Component } from 'react';
// import D from './D'
import A from './A';

// class B extends Component {
//     render(){
//         return (
//             <div>
//                 <p>我的名字叫：{this.props.name}</p>
//                 <p>我的年龄是：{this.props.age}</p>
//                 我的性别是：{this.props.sex}
//                 <div>这是B组件</div>
//                 <img src={require("./../../images/B.jpg")} alt=""/>
//             </div>
//         )
//     }
// }
// export default A("提示:")(B)

class B extends Component {
  render() {
    return (
      <div>
        <input type="text" {...this.props}></input>
        <p>输入的值：{this.props.value}</p>
        <p>我的名字叫：{this.props.name}</p>
        <p>我的年龄是：{this.props.age}</p>
        我的性别是：{this.props.sex}
        <div>这是B组件</div>
        <img src={require('./../../images/B.jpg')} alt="" />
      </div>
    );
  }
}
export default A('提示:')(B);
