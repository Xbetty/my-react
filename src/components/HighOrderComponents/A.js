import React, {Component} from 'react'

// function A(WrappedComponent){
//     return class A extends Component {
//         render(){
//             return (
//                 <div className="a-container">
//                     {/* <div>这是A组件</div>
//                     <img src={require("./../../images/A.jpg")}/> */}
//                     <div className="header">
//                         <div>提示:这是A组件</div>
//                         <div>x</div>
//                     </div>
//                     <div>
//                         这是A内容部分
//                         <WrappedComponent sex={'女'} {...this.props}></WrappedComponent>
//                     </div>
//                 </div>
//             )
//         }
//     }
// }
// export default A

// export default (title) => WrappedComponent => class A extends Component {
//     render(){
//         // 属性的删减
//         const {age, ...otherProps} = this.props
//         return (
//             <div className="a-container">
//                 <div className="header">
//                     <div>{title}</div>
//                     <div>x</div>
//                 </div>
//                 <div>
//                     {/* 添加属性 */}
//                     {/* <WrappedComponent sex={'女'} {...this.props}></WrappedComponent> */}
//                     {/* 不添加age属性 */}
//                     <WrappedComponent sex={'女'} {...otherProps}></WrappedComponent>
//                 </div>
//             </div>
//         )
//     }
// }


// export default (title) => WrappedComponent => class A extends Component {
//     refc(instance){
//         // instance是组件的实例
//         instance.getName && console.log(instance.getName())
//     }
//     render(){
//         // 属性的删减
//         const {age, ...otherProps} = this.props
//         return (
//             <div className="a-container">
//                 <div className="header">
//                     <div>{title}</div>
//                     <div>x</div>
//                 </div>
//                 <div>
//                     <WrappedComponent sex={'女'} {...otherProps} ref={this.refc.bind(this)}></WrappedComponent>
//                 </div>
//             </div>
//         )
//     }
// }

export default (title) => WrappedComponent => class A extends Component {
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
        this.onInputChange=this.onInputChange.bind(this)
    }
    onInputChange(e){
        this.setState({
            value: e.target.value
        })
    }
    render(){
        // 属性的删减
        const {age, ...otherProps} = this.props
        const newProps = {
            value: this.state.value,
            onInput: this.onInputChange
        }
        return (
            <div className="a-container">
                <div className="header">
                    <div>{title}</div>
                    <div>这是高阶组件A组件</div>
                </div>
                <div>
                    <WrappedComponent sex={'女'} {...otherProps} {...newProps}></WrappedComponent>
                </div>
            </div>
        )
    }
}