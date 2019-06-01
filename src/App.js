import React, { Component } from 'react'
import Home from './Pages/Home'
import {BrowserRouter as Router, Route, Switch} from react-router-dom


class App extends Component {
  render() {
    return (
      <>
        <Home />
      </>
    )
  }
}

export default App
