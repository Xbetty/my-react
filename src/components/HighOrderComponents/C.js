/*
 * @Author: xiongziting
 * @Date: 2019-11-20 11:46:01
 * @LastEditors: xiongziting
 * @LastEditTime: 2020-04-23 15:51:42
 * @Description: 
 * @FilePath: \react-my-prac\src\components\HighOrderComponents\C.js
 */
import React, {Component} from 'react'
// import D from './D'
// class C extends Component {
//     render(){
//         return (
//             <div>
//                 <div>这是C组件</div>
//                 <img src={require("./../../images/A.jpg")} alt=""/>
//             </div>
//         )
//     }
// }
// export default D(C)
import A from './A'
class C extends Component {
    render(){
        return (
            <div>
                <input type="text" {...this.props}></input>
                <p>输入的值：{this.props.value}</p>
                <div>这是C组件</div>
                <img src={require("./../../images/A.jpg")} alt=""/>
            </div>
        )
    }
}
export default A('提示：')(C)