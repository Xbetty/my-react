// import React from 'react'
// class UseStateDemo extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     render() {
//       return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Click me
//           </button>
//         </div>
//       );
//     }
//   }
//   export default  UseStateDemo

import React, { useState } from 'react';

export default function UseStateDemo() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}