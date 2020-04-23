/*
 * @Author: xiongziting
 * @Date: 2019-11-20 11:46:01
 * @LastEditors: xiongziting
 * @LastEditTime: 2020-04-23 15:40:01
 * @Description: 
 * @FilePath: \react-my-prac\src\components\HighOrderComponents\E.js
 */
import React, {Component} from 'react'

import D from './D'
class E extends Component{
    componentWillMount(){
        alert('我是原始生命周期！')
    }
    render(){
        return(
            <div>我是E组件</div>
        )
    }
}
export default D(E)