import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import './App.css'
// import logo from './logo.svg'

const Index: React.StatelessComponent = () => <h2 className="e2e-home">Home</h2>
const About: React.StatelessComponent = () => (
  <h2 className="e2e-about">About</h2>
)
const Users: React.StatelessComponent = () => (
  <h2 className="e2e-users">Users</h2>
)

const AppRouter: React.StatelessComponent = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
)

export default AppRouter
