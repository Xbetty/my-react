import React, {Component} from 'react'

function d(WrapperComponent){
    return class D extends Component {
        render(){
            return (
                <div>
                    <div>这是D组件</div>
                    <WrapperComponent/>
                </div>
            )
        }
    }
}
export default d
