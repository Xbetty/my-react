import React, { useState } from 'react';
export default function FuncComponents() {
  const [a, setA] = useState(0);
  function handleFuncCom() {
    console.log('a0', a);
    setA(1);
    setTimeout(() => {
      setA(2);
      setA(3);
    }, 3);
    setA(4);
  }
  console.log('a', a);
  return (
    <div>
      <p>
        state执行过程：<span>{a}</span>
      </p>
      <button onClick={handleFuncCom}>func组件</button>
    </div>
  );
}
