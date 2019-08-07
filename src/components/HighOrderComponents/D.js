import React, {Component} from 'react'
import { element } from 'prop-types';

// function d(WrapperComponent){
//     return class D extends Component {
//         render(){
//             return (
//                 <div>
//                     <div>提示：这是D组件</div>
//                     <WrapperComponent/>
//                 </div>
//             )
//         }
//     }
// }
// export default d

// 继承方式的高阶组件
const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {
    // 调试时显示的组件名称
    static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`

    componentWillMount(){
        console.log(1)
        // alert('我是修改后的生命周期')
    }
    render(){
        console.log(2)
        const element = super.render()
        const newStyle = {
            color: element.type === 'div' ? 'red' : 'green'
        }
        const newProps = {...this.props, style: newStyle}
        // 渲染到页面中
        return React.cloneElement(element, newProps, element.props.children)
    }
}
function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
export default modifyPropsHOC