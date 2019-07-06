import React, {Component} from 'react'
import A from './A'
class B extends Component {
    render(){
        return (
            <div>
                <div>这是B组件</div>
                <img src={require("./../../images/B.jpg")} alt=""/>
            </div>
        )
    }
}
export default  A(B)