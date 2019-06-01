import React, { Component } from 'react'
import Home from './Pages/Home'
import RandomMovie from './components/RandomMovie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <RandomMovie />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
