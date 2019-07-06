import React, {Component} from 'react'
import A from './A'
class C extends Component {
    render(){
        return (
            <div>
                <div>这是C组件</div>
                <img src={require("./../../images/A.jpg")} alt=""/>
            </div>
        )
    }
}
export default A(C)