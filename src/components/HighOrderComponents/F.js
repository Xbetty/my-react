/*
 * @Author: xiongziting
 * @Date: 2019-11-20 11:46:01
 * @LastEditors: xiongziting
 * @LastEditTime: 2020-04-23 15:40:10
 * @Description: 
 * @FilePath: \react-my-prac\src\components\HighOrderComponents\F.js
 */
import React, {Component} from 'react'
import D from './D'

class F extends Component {
    render(){
        return(
            <p>我是F组件</p>
        )
    }
    
}
export default D(F)