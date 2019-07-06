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
                <div>这是C组件</div>
                <img src={require("./../../images/A.jpg")} alt=""/>
            </div>
        )
    }
}
export default A('提示：')(C)