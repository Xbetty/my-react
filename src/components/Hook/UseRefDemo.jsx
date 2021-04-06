// import React from 'react';
// class UseRefDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log('this.refs', this.refs);
//     this.refs.text.style.color = 'red';
//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}> 更换文本颜色</button>
//         <span ref="text">测试ref</span>
//       </>
//     );
//   }
// }
// export default UseRefDemo;




// import React from 'react';
// class UseRefDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.text = React.createRef();
//   }
//   handleClick() {
//     console.log('this.refs', this.refs);
//     this.text.current.style.color = 'red';
//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}> 更换文本颜色</button>
//         <span ref={this.text}>测试ref</span>
//       </>
//     );
//   }
// }
// export default UseRefDemo;

import React, { useRef } from 'react';
export default function UseRefDemo() {
  const textRef = useRef();

  function handleClick() {
      console.log('textRef',textRef)
    textRef.current.style.color = 'red';
  }

  return (
    <>
      <button onClick={handleClick}> 更换文本颜色</button>
      <span ref={textRef}>测试ref</span>
    </>
  );
}
