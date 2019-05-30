import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Home from './Pages/Home'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <Home />
      </>
    )
  }
}

export default App
