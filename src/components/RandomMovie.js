import React, { Component } from 'react'

class RandomMovie extends Component {
  render() {
    const randomNumber = Math.ceil(Math.random() * 20)
    console.log(randomNumber)
    return (
      <section className="random-movie">
        {/* {this.props.movie.title} */}
        {/* {console.log(this.props.movies)} */}
      </section>
    )
  }
}

export default RandomMovie
