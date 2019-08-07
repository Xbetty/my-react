// 基本路由
import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// 组件
function Index() {
  return <h2>Home</h2>
}
function About(){
  return <h2>About</h2>
}
function Users() {
  return <h2>Users</h2>
}
function AppRouter() {
  return(
    <Router>
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Basic-Home</Link>
            </li>
            <li>
              <Link to="/about/">Basic-About</Link>
            </li>
            <li>
              <Link to="/users/">Basic-Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index}/>
        <Route path="/about/" exact component={About}/>
        <Route path="/users/" component={Users}/>
      </Fragment>
    </Router>
  )
}
export default AppRouter