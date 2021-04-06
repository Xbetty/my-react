import React from 'react';
import UseStateDemo from './UseStateDemo';
import UseRefDemo from './UseRefDemo'
import UseEffectDemo from './UseEffectDemo'
export default function HookIndex() {
  return (
    <>
      <h1>七. Hook Demo</h1>
      <UseStateDemo />
      <UseRefDemo/>
      <UseEffectDemo/>
    </>
  );
}
