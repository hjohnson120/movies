import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
  state = {
    movie: []
  }

  getSelectedMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`
    )
      .then(resp => {
        return resp.json()
      })
      .then(movieSelected => {
        console.log(movieSelected)
        this.setState({
          movie: movieSelected.results
        })
      })
  }

  componentDidMount() {
    this.getSelectedMovie()
  }

  render() {
    return (
      <div>
        <section className="movie-info" />
        {/* <h1> {this.state.movie.character}</h1> */}
        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default Movie
