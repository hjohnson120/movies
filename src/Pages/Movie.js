import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
  state = {
    movie: [],
    name: [],
    cast: []
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
          cast: movieSelected.cast
        })
      })
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`
    )
      .then(resp => {
        return resp.json()
      })
      .then(movieSelected => {
        console.log(movieSelected)
        this.setState({
          movie: movieSelected
        })
      })
  }

  componentDidMount() {
    this.getSelectedMovie()
  }

  render() {
    return (
      <>
        <div>
          <h1 className="movie">{this.state.movie.title}</h1>
          <h2 className="movie">Cast Members</h2>
          {this.state.cast.map(cast => {
            return (
              <li className="cast-container">
                <p>{cast.character}</p>
                <p>{cast.name}</p>
                <hr />
              </li>
            )
          })}
          <Link to="/">Go Home</Link>
        </div>
      </>
    )
  }
}

export default Movie
