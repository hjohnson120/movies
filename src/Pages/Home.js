import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad&language=en-US&page=1'
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
  render() {
    return (
      <section className="movies-container">
        {this.state.movies.map((movie, index) => {
          return (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
              <h1>{movie.title}</h1>
            </>
          )
        })}
      </section>
    )
  }
}

export default Home
