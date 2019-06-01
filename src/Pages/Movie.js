import React, { Component } from 'react'

class Movie extends Component {
  // componentDidMount() {
  //    fetch
  //      {`https://api.themoviedb.org/3/movie/${this.movie.id}/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`}
  //    .then(resp => {
  //     return resp.json()
  //   })
  //   .then(movieList => {
  //     console.log(movieList)
  //     this.setState({
  //       movies: movieList.results
  //     })
  //   })
  // }

  render() {
    return <h1>Hi!</h1>
  }
}

export default Movie
