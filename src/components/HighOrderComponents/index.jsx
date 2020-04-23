import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import B from './B';
import C from './C';
import E from './E';
import F from './F';
class HocComponentIndex extends Component {
    render () {
        return <React.Fragment>
            高阶组件
            <ul>
                <li>
                    <Link to="/b">1. B组件</Link>
                </li>
                <li>
                    <Link to="/c">2. C组件</Link>
                </li>
                <li>
                    <Link to="/e">3. E组件</Link>
                </li>
                <li>
                    <Link to="/f">4. F组件</Link>
                </li>
            </ul>

            <Route path="/b" component={B}/>
            <Route path="/c" component={C}/>
            <Route path="/e" component={E}/>
            <Route path="/f" component={F}/>
        </React.Fragment>
    }
}
export default HocComponentIndex