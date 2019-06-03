import React, { Component } from 'react'
import Home from './Pages/Home'
// import RandomMovie from './components/RandomMovie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movie from './Pages/Movie'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          {/* <RandomMovie /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Movie" exact component={Movie} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
