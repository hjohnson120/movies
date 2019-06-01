import React, { Component } from 'react'

class RandomMovie extends Component {
  componentDidMount() {}

  render() {
    const randomNumber = Math.ceil(Math.random() * 20)
    console.log(randomNumber)
    return (
      <section className="random-movie">
        {/* <h1>{this.props.movies.title}</h1> */}
      </section>
    )
  }
}

export default RandomMovie
