import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// const movieId = this.props.match.params.id

class Movie extends Component {
  getMovieId() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.movieId
      }/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`
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
      <div>
        <h1>sdjasd</h1>
        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default Movie
