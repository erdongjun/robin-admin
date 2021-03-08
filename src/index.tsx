import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import HomeLayout from './page/home-layout'
import Login from './page/login'
import Home from './page/home'

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home1</Link>
          </li>
          <li>
            <Link to="/layout">layout</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/layout">
          <HomeLayout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
