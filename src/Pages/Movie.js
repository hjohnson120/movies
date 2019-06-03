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

      // 'https://api.themoviedb.org/3/movie/420817/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad'
    )
      .then(resp => {
        return resp.json()
      })
      .then(movieSelected => {
        console.log(movieSelected)
        this.setState({
          movie: movieSelected.data
        })
      })
  }

  componentDidMount() {
    this.getSelectedMovie()
  }

  render() {
    return (
      <div>
        <h1>I work, kinda</h1>
        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default Movie
