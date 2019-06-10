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
        <header>
          <Link to="/">Go Home</Link>
        </header>
        <div>
          <h1 className="movie">{this.state.movie.title}</h1>
          <h2 className="movie">Cast Members</h2>
          {this.state.cast.map(cast => {
            return (
              <li className="cast-container">
                <p>
                  <b>Character: </b>
                  {cast.character}
                </p>
                <p>
                  <b>Actor: </b> {cast.name}
                </p>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                  alt="actor poster"
                />
                <hr />
              </li>
            )
          })}
        </div>
      </>
    )
  }
}

export default Movie
