import React, { Component } from 'react'

class RandomMovie extends Component {
  // state:{
  //   id: 0
  // }
  
  componentDidMount() {
   
  }

  render() {
  const randomNumber = Math.ceil(Math.random() * 20)
  console.log(randomNumber)
    return (
      <></>
      <section className="random-movie">
        {this.props.movie.}
      </section>
    )
  }
}

export default RandomMovie
