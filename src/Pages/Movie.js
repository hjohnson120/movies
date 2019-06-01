import React, { Component } from 'react'

const movieId = this.props.match.params.id

class Movie extends Component {
  getMovieId() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`
    )
      .then(resp => {
        return resp.json()
      })
      .then(movieList => {
        console.log(movieList)
        this.setState({
          movies: movieList.results
        })
      })
  }

  componentDidMount() {
    this.getMovieId()
  }

  render() {
    return (
      <>
        <h1>{this.movieId}</h1>
        <h1>Hi!</h1>
      </>
    )
  }
}

export default Movie
