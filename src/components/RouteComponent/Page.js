import React from 'react'
// Part 6 阻止组件渲染
function WarningBanner(props){
    if(!props.warn){
        return null
    }

    return(
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render(){
        return(
            <div>
                <p>Part 6 阻止组件渲染</p>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide': 'Show'}
                </button>
            </div>
        )
    }
}

// ReactDOM.render(
//     <Page/>,
//     document.getElementById('root')
// )

export default Page