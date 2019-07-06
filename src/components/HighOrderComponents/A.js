import React, {Component} from 'react'

function A(WrappedComponent){
    return class A extends Component {
        render(){
            return (
                <div className="a-container">
                    {/* <div>这是A组件</div>
                    <img src={require("./../../images/A.jpg")}/> */}
                    <div className="header">
                        <div>提示</div>
                        <div>x</div>
                    </div>
                    <div>
                        这是内容部分
                        <WrappedComponent></WrappedComponent>
                    </div>
                </div>
            )
        }
    }
}
export default A