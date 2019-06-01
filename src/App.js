import React, { Component } from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movie from './Pages/Movie'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Movie" component={Movie} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
