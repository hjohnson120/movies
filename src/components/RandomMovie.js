import React, { Component } from 'react'

// class RandomMovie extends Component {
//   render() {
//     const randomNumber = Math.ceil(Math.random() * 20)
//     console.log(randomNumber)
//     return (
//       <section className="random-movie">
//         {/* <h1>{this.props.movie.title}</h1> */}
//       </section>
//     )
//   }
// }
class RandomMovie extends Component {
  componentDidMount() {}

  render() {
    const randomNumber = Math.ceil(Math.random() * 20)
    console.log(randomNumber)
    return (
      <section className="random-movie">
        {this.props.movie.index[randomNumber]}
      </section>
    )
  }
}

export default RandomMovie
